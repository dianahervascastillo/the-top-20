import React, { Component } from 'react';

export default class ErrorMessage extends Component {
  render () {
    return (
      <div className='notification is-danger'>
        Sorry, there is a problem connecting to <a
        href='https://developers.themoviedb.org/3/getting-started/introduction'
        aria-label='Opens The Movie Database API Documentation site in a new tab of window'
        rel='noopener noreferrer'>The Movie Database (TMDb) API.</a>
      </div>
    );
  }
}
