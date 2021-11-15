import React from 'react';
import PropTypes from 'prop-types';

import defaultProps from '../../constants/defaultProps';
import staticContent from '../../constants/staticContent';

import GenresList from '../GenresList/GenresList';

import './SingleSlide.scss';

const { defaultOverview, defaultYear, defaultDirector, defaultActors, defaultPoster, defaultImdbRating } = defaultProps.singleSlider;
const { ratingTitle, metaScoreTitle, trailerTitle, trailerSite, directorTitle, actorsTitle } = staticContent;

const SingleSlide = ({ movie: { genres, poster, title, year, imdbRating, metascore, trailer_url, director, actors, overview } }) => (
  <div className="swiper-slide item">
    <div className="item__description item__title">
      <span>{`${title} (${year || defaultYear})`}</span>
    </div>

    <div className="item__img">
      <img src={poster} alt="Poster" />

      <div className="item__shadow item__shadow--left" />

      <div className="item__shadow item__shadow--right" />

      <div className="item__description item__marks">
        <div className=" item__sidebar item__sidebar--imdb">
          <span className="item__sidebar-title">{ratingTitle}</span>

          <span className="item__sidebar-number">{imdbRating}</span>
        </div>

        {!isNaN(metascore) && (
          <div className="item__sidebar item__sidebar--metascore">
            <span className="item__sidebar-title item__sidebar-title--sm">{metaScoreTitle}</span>

            <span className="item__sidebar-number">{`${metascore}%`}</span>
          </div>
        )}

        {trailer_url.length > 0 && (
          <div className="item__sidebar item__sidebar--trailer">
            <span className="item__sidebar-title item__sidebar-title--sm">{trailerTitle}</span>

            <span className="item__sidebar-icon item__sidebar-icon--youtube" />

            <a className="item__sidebar-link" href={trailer_url} target="_blank" rel="noopener noreferrer">
              {trailerSite}
            </a>
          </div>
        )}

        {genres.length > 0 && (
          <div className="item__genre">
            <GenresList genres={genres} size="sm" />

            <GenresList genres={genres} size="lg" />
          </div>
        )}
      </div>
    </div>

    <div className="item__description item__bottom">
      <div className="item__cast">
        <span className="item__director">
          {directorTitle}: <span>{director || defaultDirector}</span>
        </span>

        <span className="item__actors">
          {actorsTitle}: <span>{actors || defaultActors}</span>
        </span>
      </div>

      <div className="item__overview">
        <span>{overview || defaultOverview}</span>
      </div>
    </div>
  </div>
);

SingleSlide.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.array,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imdbRating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    metascore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    trailer_url: PropTypes.string,
    director: PropTypes.string,
    actors: PropTypes.string,
    overview: PropTypes.string
  })
};

SingleSlide.defaultProps = {
  movie: {
    genres: [],
    poster: defaultPoster,
    year: defaultYear,
    imdbRating: defaultImdbRating,
    metascore: 0,
    trailer_url: '',
    director: defaultDirector,
    actors: defaultActors,
    overview: defaultOverview
  }
};

export default SingleSlide;
