import axios, { AxiosInstance } from 'axios';
import type { Genre, ListingResponse } from './types';

class Api {
  private instance: AxiosInstance | null = null;

  getMovies(
    page = 1,
    genre = '',
    userScore = '',
    sortBy = 'popularity.desc'
  ): Promise<ListingResponse> {
    const scoreLte = userScore.split(':')[0] || '';
    const scoreGte = userScore.split(':')[1] || '';

    return this.http
      .get(
        `/discover/movie?page=${page}&include_adult=false&with_genres=${genre}&vote_average.lte=${scoreLte}&vote_average.gte=${scoreGte}&sort_by=${sortBy}`
      )
      .then((response) => {
        // Override prop names to match shared interface
        // @see https://developers.themoviedb.org/3/discover/movie-discover
        response.data.results.forEach((flick: any) => {
          flick.date = flick.release_date;
          delete flick.release_date;
        });

        return response.data;
      });
  }

  getMovieGenres(): Promise<Genre[]> {
    return this.http
      .get('/genre/movie/list')
      .then((response) => response.data.genres);
  }

  getTvShows(
    page = 1,
    genre = '',
    userScore = '',
    sortBy = 'popularity.desc'
  ): Promise<ListingResponse> {
    const scoreLte = userScore.split(':')[0] || '';
    const scoreGte = userScore.split(':')[1] || '';

    return this.http
      .get(
        `/discover/tv?page=${page}&include_adult=false&with_genres=${genre}&vote_average.lte=${scoreLte}&vote_average.gte=${scoreGte}&sort_by=${sortBy}`
      )
      .then((response) => {
        // Override prop names to match shared interface
        // @see https://developers.themoviedb.org/3/discover/tv-discover
        response.data.results.forEach((flick: any) => {
          flick.date = flick.first_air_date;
          flick.original_title = flick.original_name;
          flick.title = flick.name;
          delete flick.first_air_date;
          delete flick.original_name;
          delete flick.name;
        });

        return response.data;
      });
  }

  getTvShowGenres(): Promise<Genre[]> {
    return this.http
      .get('/genre/tv/list')
      .then((response) => response.data.genres);
  }

  private createInstance() {
    const http = axios.create({
      baseURL: process.env.REACT_APP_API_HOST,
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'en-US'
      }
    });

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        console.log(
          `%c API Error: ${error.message}`,
          'background: #ef4444; color: #ffffff'
        );
        return Promise.reject(error);
      }
    );

    this.instance = http;

    return http;
  }

  private get http(): AxiosInstance {
    return this.instance ?? this.createInstance();
  }
}

export default Api;
