import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { fetchMoviesList } from '../actions'
import { Container, Row } from "react-bootstrap";
import FilmBar from "./ProgressBarOverlay";
import MovieCard from './MovieCard'

const HomePage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.home.moviesLoading);
  const movies = useSelector(state => state.home.movies)

  useEffect(() => {
    dispatch(fetchMoviesList())
  }, []);

  document.title = "Popular Movies - Your all-in-one movies home!";

  return <Container>
    {isLoading && <FilmBar />}
    {!isLoading &&
      <Row>
        {movies.map(movie =>
          <MovieCard movie={movie} />)}
      </Row>}
  </Container>
};

export default HomePage;
