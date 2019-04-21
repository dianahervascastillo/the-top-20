import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';
import Modal from '../Modal';

export default class Movies extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadingMovie: false,
      error: false,
      itemId: null,
      movie: {},
    };
    this.getMovie = this.getMovie.bind(this);
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

  getMovie(id) {
    api.getMovie(id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loadingMovie: false,
            error: false,
            movie: Object.assign({}, data),
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
    const {itemId, movie, error, loadingMovie } = this.state;
    return(
      <Fragment>
        {
          (itemId && !loadingMovie) &&
          <Modal type='movie' detailedData={movie} onClick={this.onCloseHandler} />
        }
        {
          error &&
          <ErrorMessage />
        }
        <div className='data-list'>
          {this.props.data.map(movie => <Card key={movie.id} data={movie} onClick={() => this.getMovie(movie.id)}>{movie.title}</Card>)}
        </div>
      </Fragment>
    )
  }
}

Movies.propTypes = {
  data: PropTypes.array.isRequired
};