import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import { getMovies, initSlider } from './utils/getMovies';

import Slider from './components/Slider/Slider';
import Preloader from './components/Preloader/Preloader';

import './styles/App.scss';

class App extends Component {
  state = {
    movies: [],
    contentLoading: true
  };

  componentDidMount() {
    const { movies } = this.state;

    getMovies(movies)
      .then(movieItemsTMDb => this.setState({ movies: movieItemsTMDb }))
      .then(() => this.setupSlider())
      .catch(err => err);
  }

  setupSlider = () => {
    initSlider()
      .then(contentLoading => this.setState({ contentLoading }))
      .catch(err => err);
  };

  render() {
    const { contentLoading, movies } = this.state;

    return (
      <>
        <CSSTransition in={contentLoading} timeout={500} classNames="animation" unmountOnExit>
          <Preloader />
        </CSSTransition>

        <CSSTransition in={!contentLoading} timeout={1000} classNames="animation">
          <div className="content">
            <Slider movies={movies} />
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default App;
