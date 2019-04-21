import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export default class Modal extends Component {
  renderTitleOrName(detailedData){
    if(detailedData.title != undefined){
      return detailedData.title;
    }
    if(detailedData.name != undefined){
      return detailedData.name;
    }
  }

  renderDetailedInfo(type, detailedData){
    switch(type) {
      case 'movie':
        return (
          <Fragment>
            <p><em>{detailedData.tagline}</em></p>
            <p>{detailedData.overview}</p>
            <span className='general-info'>
              <h2>Genres:</h2>
              <ul className='genres'>
                {detailedData.genres.map( genre =>(
                    <li key={genre.id}>{genre.name}</li>
                  )
                )}
              </ul>
            </span>
            <p>Visit the original film site at <a href={detailedData.homepage} target='_blank' aria-label='Opens original site URL in new window or tab' rel='noreferrer noopener'>{detailedData.homepage}</a></p>
          </Fragment>
        );
      case 'tv':
        return (
          <Fragment>
            <p></p>
            <p>{detailedData.overview}</p>
            <span className='general-info'>
              <h2>Genres:</h2>
              <ul className='genres'>
                {detailedData.genres.map( genre =>(
                    <li key={genre.id}>{genre.name}</li>
                  )
                )}
              </ul>
            </span>
            <p>Visit the original film site at <a href={detailedData.homepage} target='_blank' aria-label='Opens original site URL in new window or tab' rel='noreferrer noopener'>{detailedData.homepage}</a></p>
          </Fragment>
        );
      case 'people':
        return (
          <Fragment>
            <p>aka <em>{detailedData.also_known_as[0]}</em></p>
            <p>Born in {detailedData.place_of_birth} in {detailedData.birthday && <Moment format='YYYY'>{detailedData.birthday}</Moment>} {detailedData.overview}</p>
            <br/>
            <p>{detailedData.biography}</p>
          </Fragment>
        );
      default:
        return null;
    }
  }

  render() {
    const { type, detailedData } = this.props;
    return (
      <div className='modal is-active'>
        <div className='modal-background'/>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <h1 className='modal-card-title'>
              {this.renderTitleOrName(detailedData)}
              {detailedData.release_date && <small> (<Moment format='YYYY'>{detailedData.release_date}</Moment>)</small>}
              {detailedData.first_air_date && <small> (<Moment format='YYYY'>{detailedData.first_air_date}</Moment>)</small>}
            </h1>
            <button className='delete' aria-label='close' onClick={this.props.onClick}></button>
          </header>
          <section className='modal-card-body'>
            {this.renderDetailedInfo(type, detailedData)}
          </section>
          <footer className='modal-card-foot'>
            <p><strong>Popularity:</strong> {detailedData.popularity}</p>
            {detailedData.vote_average && <p><strong>Rating:</strong> {detailedData.vote_average}/10</p>}
          </footer>
        </div>
      </div>
    );
  }
}


Modal.propTypes = {
  type: PropTypes.string.isRequired,
  detailedData: PropTypes.object,
  onClick: PropTypes.func
}




