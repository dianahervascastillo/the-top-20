import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import ErrorMessage from '../ErrorMessage';
import Card from '../Card';
import Modal from '../Modal';

export default class People extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loadingPerson: true,
      error: false,
      itemId: null,
      person: {},
    };
    this.getPeople = this.getPeople.bind(this);
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

  getPeople(id) {
    api.getPeople(id)
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loadingPerson: false,
            error: false,
            person: Object.assign({}, data),
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
    const {itemId, person, error, loadingPerson } = this.state;
    return(
      <Fragment>
        {
          (itemId && !loadingPerson) &&
          <Modal type='people' detailedData={person} onClick={this.onCloseHandler} />
        }
        {
          error &&
          <ErrorMessage />
        }
        <div className='data-list'>
          {this.props.data.map(people => <Card key={people.id} data={people} onClick={() => this.getPeople(people.id)}>{people.name}</Card>)}
        </div>
      </Fragment>
    )
  }
}

People.propTypes = {
  data: PropTypes.array.isRequired
};