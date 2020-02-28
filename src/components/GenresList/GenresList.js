import React from 'react';
import PropTypes from 'prop-types';

import { generateIconClass } from '../../utils/generateIconClass';

const GenresList = ({ genres, size }) => (
  <div className={`item__sidebar item__genre-box item__genre-box--${size}`}>
    {genres.map(({ id, name }) => (
      <div key={id} className="item__genre-element">
        <div className={generateIconClass(id)} />
        <div className="item__genre-name">{name}</div>
      </div>
    ))}
  </div>
);

GenresList.propTypes = {
  genres: PropTypes.array,
  size: PropTypes.string
};

GenresList.defaultProps = {
  genres: [],
  size: 'sm'
};

export default GenresList;
