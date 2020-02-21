import React from 'react';
import PropTypes from 'prop-types';

import 'swiper/dist/css/swiper.css';

import './Slider.scss';

import SingleSlide from './SingleSlide/SingleSlide';

const Slider = ({ movies }) => (
  <div className="swiper-container">
    <div className="swiper-wrapper">
      {movies.map(item => (
        <SingleSlide key={item.id} movie={item} />
      ))}
    </div>
  </div>
);

Slider.propTypes = {
  movies: PropTypes.array
};

Slider.defaultProps = {
  movies: []
};

export default Slider;
