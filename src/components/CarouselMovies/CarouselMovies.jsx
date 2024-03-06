import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import movies from '../../resources/moviedb';

const CarouselMovies = () => {
    return (
        <Container className="mt-4 text-white">
            {/* <Carousel>
                {movies.slice(0, 3).map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <Row>
                            <Col md={6}>
                                <img
                                    className="d-block w-100"
                                    src={movie.imagen}
                                    alt={movie.titulo}
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={6}>
                                <h3>{movie.titulo}</h3>
                                <p>{movie.sinopsis}</p>
                                <p>
                                    Rating: {movie.calificacion} ({movie.votos} votos)
                                </p>
                                <Button variant="primary">Ver Película</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel> */}

            <Carousel>
                {movies.slice(0, 3).map((movie) => (
                    <Carousel.Item key={movie.id}>
                        <Row className="align-items-center justify-content-center">
                            <Col className="d-flex align-items-center justify-content-center" md={6}>
                                <img
                                    className="img-fluid rounded w-75 h-75"
                                    src={movie.imagen}
                                    alt={movie.titulo}
                                />
                            </Col>
                            <Col md={6}>
                                <h3 className='mt-4 mb-4'>{movie.titulo}</h3>
                                <p>{movie.sinopsis}</p>
                                <div className="text-center mt-5">
                                    <p>
                                        Calificación: {movie.calificacion} ({movie.votos} votos)
                                    </p>
                                    <Button className="mt-5" variant="primary">Ver</Button>
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

        </Container>
    );
};

export default CarouselMovies;
