import React, { Component } from 'react';
import PropTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w300';

export default class Card extends Component {

  renderImage (image, name) {
    if (image && name) {
      return (
        <div className='card-image'>
          <figure className='image'>
            <img src={`${IMG_URL}${image}`} alt={name}/>
          </figure>
        </div>)
    } else {
      return null
    }
  }

  render() {
    const {data, children} = this.props;
    let image;
    let imageTitle;

    if(data.profile_path != undefined && data.name != undefined ){
      image = data.profile_path;
      imageTitle = data.name;
    }
    if(data.poster_path != undefined && data.title != undefined ){
      image = data.poster_path;
      imageTitle = data.title;
    }
    if(data.poster_path != undefined && data.name != undefined){
      image = data.poster_path;
      imageTitle = data.name;
    }
    return (
      <div className='card'>
        <button className='card--button' onClick={this.props.onClick} type='button'>
          {this.renderImage(image, imageTitle)}
          <div className='card-content'>
            <div className='content'>
              <h3>{children}</h3>
            </div>
          </div>
        </button>

      </div>
    );
  }
}


Card.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}




