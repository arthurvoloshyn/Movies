import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import staticContent from './constants/staticContent';

import { getMovies, initSlider } from './utils/getMovies';

import Slider from './Slider/Slider';
import Preloader from "./Preloader/Preloader";

import './styles/App.sass';

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
        const { credentials, codeResource, resourceCodeLink, mail } = staticContent;

        return (
            <>
                <CSSTransition
                    in={contentLoading}
                    timeout={500}
                    classNames="animation"
                    unmountOnExit
                >
                    <Preloader/>
                </CSSTransition>

                <CSSTransition
                    in={!contentLoading}
                    timeout={1000}
                    classNames="animation"
                >
                    <div className="content">
                        <div className="credentials">
                            <p>{credentials}</p>
                            <a href={resourceCodeLink} target="_blank" rel="noopener noreferrer">{codeResource}</a>
                            &nbsp;
                            <a href={`mailto:${mail}`}>{mail}</a>
                        </div>
                        <Slider movies={movies} />
                    </div>
                </CSSTransition>
            </>
        );
    }
}

export default App;
