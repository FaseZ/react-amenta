import React, { useState } from 'react';
import { Container, Row, Col, Button, Table, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import seriesData from '../../resources/seriesdb';

const Sections = () => {
    const seriesTable = [
        { id: 1, title: "Doctor House", estaDisponible: true },
        { id: 2, title: "Las chicas del cable", estaDisponible: true },
        { id: 3, title: "Lucifer", estaDisponible: true },
        { id: 4, title: "Peaky Blinders", estaDisponible: false },
        { id: 5, title: "Stranger Things", estaDisponible: true },
        { id: 6, title: "Grey's Anatomy", estaDisponible: true },
        { id: 7, title: "The Big Bang Theory", estaDisponible: false }
    ];

    const moviesData = [
        { id: 1, title: "Spider-Man", estaDisponible: true },
        { id: 2, title: "Black Adam", estaDisponible: true },
        { id: 3, title: "Venom", estaDisponible: false },
        { id: 4, title: "Uncharted", estaDisponible: true },
        { id: 5, title: "SpaceJam", estaDisponible: true },
        { id: 6, title: "Super Mascotas", estaDisponible: true },
        { id: 7, title: "Un Sueño Posible", estaDisponible: false }
    ];

    const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial

    const handleFontSizeToggle = () => {
        setFontSize((prevSize) => (prevSize === 16 ? prevSize * 1.5 : 16));
    };

    return (
        <Container className="mt-4 text-white">
            <Row>
                <Col md={6}>
                    <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                        <Table className='text-center' striped bordered hover style={{ fontSize: `${fontSize}px` }}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Series</th>
                                </tr>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seriesTable.map((series) => (
                                    <tr key={series.id}>
                                        <td className="text-center">{series.title}</td>
                                        <td className={`text-center ${series.estaDisponible ? 'text-success' : 'text-warning'}`}>
                                            {series.estaDisponible ? 'Disponible' : 'Proximamente'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Table className='ms-2 text-center' striped bordered hover style={{ fontSize: `${fontSize}px` }}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Peliculas</th>
                                </tr>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moviesData.map((movie) => (
                                    <tr key={movie.id}>
                                        <td className="text-center">{movie.title}</td>
                                        <td className={`text-center ${movie.estaDisponible ? 'text-success' : 'text-warning'}`}>
                                            {movie.estaDisponible ? 'Disponible' : 'Proximamente'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                        <Button className="mt-3" variant="primary" onClick={handleFontSizeToggle}>
                            Aumentar Tamaño de Fuente
                        </Button>
                        <Link to="/otra">
                            <Button className="mt-3 ms-2" variant="success">
                                Ricky & Morty
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col className='d-flex align-items-center' md={6}>
                    <Carousel>
                        {seriesData.map((serie) => (
                            <Carousel.Item key={serie.id}>
                                <Row className="align-items-center justify-content-center">
                                    <Col md={6}>
                                        <h3 className='mb-3'>{serie.titulo}</h3>
                                        <p>{serie.sinopsis}</p>
                                        <div className="text-center">
                                            <p>
                                                Calificación: {serie.calificacion} ({serie.votos} votos)
                                            </p>
                                            <Button variant="primary">Ver</Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <img
                                            className="img-fluid rounded"
                                            src={serie.imagen}
                                            alt={serie.titulo}
                                        />
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default Sections;