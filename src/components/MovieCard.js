import React from 'react'
import { Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { URL_IMAGE_BASE } from '../constants'

const MovieCard = ({ movie }) => {
    return (
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
    )
}

export default MovieCard;