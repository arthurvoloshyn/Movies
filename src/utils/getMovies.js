import Swiper from "swiper";

import {
    API_KEY,
    BASE_PATH, DATA_PARAM, DATA_QUERY,
    LANGUAGE_PARAM,
    LANGUAGE_QUERY, OMDB_API_KEY, OMDB_BASE_PATH, OMDB_I_PARAM, OMDbAPI, PAGE_PARAM, PAGE_QUERY,
    PLAYING_PATH, posterPath,
    REGION_PARAM,
    REGION_QUERY, TMDbAPI, YOUTUBE_BASE_PATH, YOUTUBE_WATCH_PARAM
} from "../constants/constants";
import staticContent from "../constants/staticContent";
import defaultProps from "../constants/defaultProps";

import { ajaxRequest } from "./ajaxRequest";

const getNowPlaying = async (movieItemsTMDb) => {
    const requestTMDb = `${BASE_PATH}${PLAYING_PATH}?${REGION_PARAM}${REGION_QUERY}&${LANGUAGE_PARAM}${LANGUAGE_QUERY}&${API_KEY}${TMDbAPI}`;
    const requestTMDbWithPage = `${requestTMDb}&${PAGE_PARAM}${PAGE_QUERY}`;

    await Promise.all([ajaxRequest(requestTMDb), ajaxRequest(`${requestTMDbWithPage}`)])
        .then(([nowPlayingPage1, nowPlayingPage2]) => {
            const { results: nowPlayingPage1Results } = nowPlayingPage1;
            let { results: nowPlayingPage2Results } = nowPlayingPage2;

            nowPlayingPage2Results = nowPlayingPage2Results.slice(0, nowPlayingPage2Results.length - 2); // to avoid TMDb API 40 requests limit

            const nowPlayingResults = nowPlayingPage1Results.concat(nowPlayingPage2Results);

            nowPlayingResults.forEach((item) => {
                item.poster = item.poster_path ? `${posterPath}${item.poster_path}` : null;

                movieItemsTMDb.push(item);
            });
        })
        .catch(err => err);

    return movieItemsTMDb;
};

const getTMDbInfo = async (movieItemsTMDb) => {
    const { trailerSite } = staticContent;

    if (movieItemsTMDb.length) {
        for (let i = 0; i < movieItemsTMDb.length; i++) {
            const currTMDbItem = movieItemsTMDb[i];
            const currTMDbId = currTMDbItem.id;
            const requestTMDb = `${BASE_PATH}/${currTMDbId}?${API_KEY}${TMDbAPI}&${DATA_PARAM}${DATA_QUERY}&${LANGUAGE_PARAM}${LANGUAGE_QUERY}`;

            const movieInfo = await ajaxRequest(requestTMDb);

            const { results: trailers } = movieInfo.videos;
            let trailerUrl = '';
            const trailersLength = trailers.length;

            if (trailersLength > 0) {
                const lastTrailer = trailers[trailersLength - 1];

                if (lastTrailer.site === trailerSite) {
                    trailerUrl = `${YOUTUBE_BASE_PATH}?${YOUTUBE_WATCH_PARAM}${lastTrailer.key}`;
                }
            }

            movieItemsTMDb[i] = {
              ...currTMDbItem,
                imdb_id: movieInfo.imdb_id,
                trailer_url: trailerUrl,
                genres: movieInfo.genres
            };
        }
    }

    return movieItemsTMDb;
};


const getOMDbInfo = async (movieItemsTMDb) => {
    const { defaultImdbRating } = defaultProps.singleSlider;

    if (movieItemsTMDb.length) {
        for (let i = 0; i < movieItemsTMDb.length; i++) {
            const currTMDbItem = movieItemsTMDb[i];
            const currIMDbId = currTMDbItem.imdb_id;
            const requestOMDb = `${OMDB_BASE_PATH}?${OMDB_I_PARAM}${currIMDbId}&${OMDB_API_KEY}${OMDbAPI}`;

            const movieInfo = await ajaxRequest(requestOMDb);

            if (isNaN(movieInfo.imdbRating)) { // may be "N/A"
                movieInfo.imdbRating = defaultImdbRating;
            }

            movieItemsTMDb[i] = {
                ...currTMDbItem,
                imdbRating: movieInfo.imdbRating,
                director: movieInfo.Director,
                actors: movieInfo.Actors,
                metascore: movieInfo.Metascore, // may be "N/A"
                year: movieInfo.Year
            };
        }
    }

    return movieItemsTMDb;
};

const sortByRating = async (movieItemsTMDb) => {
    movieItemsTMDb.sort((a, b) => {
        if (a.imdbRating > b.imdbRating) {
            return -1;
        } else if (a.imdbRating < b.imdbRating) {
            return 1;
        } else {
            return 0;
        }
    });

    return movieItemsTMDb;
};

const updateState = async (movieItemsTMDb) => {
    return new Promise((resolve, reject) => {
        JSON.stringify(movieItemsTMDb);

        resolve(movieItemsTMDb);
    });
};

export const initSlider = async () => {
    return new Promise((resolve, reject) => {
        new Swiper('.swiper-container', {
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 'auto',
            mousewheel: true,
            keyboard: true,
            grabCursor: true,
            longSwipesRatio: 1,
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : false,
            },
            on: {
                init: () => {
                    const contentLoading = false;

                    resolve(contentLoading);
                }
            }
        });
    });
};

export const getMovies = async (movieItemsTMDb) => {
    const nowPlayingMovies = await getNowPlaying(movieItemsTMDb);
    const TMDbInfoOfMovies = await getTMDbInfo(nowPlayingMovies);
    const OMDbInfoOfMovies = await getOMDbInfo(TMDbInfoOfMovies);
    const sortedByRatingMovies = await sortByRating(OMDbInfoOfMovies);
    const updatedMovies = await updateState(sortedByRatingMovies);

    return updatedMovies;
};
