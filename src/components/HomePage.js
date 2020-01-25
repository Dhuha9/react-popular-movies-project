import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { fetchMoviesList } from '../actions'
import { URL_IMAGE_BASE } from '../constants'
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import FilmBar from "./ProgressBarOverlay";

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
          <Col xs={12} lg={3}>
            <Card style={{ width: '15rem', height: '30rem', marginTop: '2rem' }}>
              <Link to={`/movie/${movie.id}`}>
                <Card.Img src={URL_IMAGE_BASE + "w185" + movie.poster_path} style={{ height: '25rem' }} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        )}
      </Row>}
  </Container>

};

export default HomePage;
