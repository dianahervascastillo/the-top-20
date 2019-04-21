import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';
import Modal from '../Modal';

export default class Television extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadingTvShow: false,
      error: false,
      itemId: null,
      tv: {},
    };
    this.getTv = this.getTv.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  onCloseHandler () {
    this.setState({itemId: null});
  }

  getTv(id) {
    api.getTv(id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loadingTvShow: false,
            error: false,
            tv: Object.assign({}, data),
            itemId: data.id
          });
        }
      })
      .catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true
          });
        }
      });
  }

  render(){
    const {itemId, tv, error, loadingTvShow } = this.state;
    return(
      <Fragment>
        {
          (itemId && !loadingTvShow) &&
          <Modal type='tv' detailedData={tv} onClick={this.onCloseHandler} />
        }
        {
          error &&
          <ErrorMessage />
        }
        <div className='data-list'>
          {this.props.data.map(tvshow => <Card key={tvshow.id} data={tvshow} onClick={() => this.getTv(tvshow.id)}>{tvshow.name}</Card>)}
        </div>
      </Fragment>
    )
  }
}

Television.propTypes = {
  data: PropTypes.array.isRequired
};