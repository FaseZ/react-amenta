import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [segmentColor, setSegmentColor] = useState('#212529');
    const [counter, setCounter] = useState(0);
    const isEven = (num) => num % 2 === 0;

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1);
    };

    const handleDislike = () => {
        setDislikes((prevDislikes) => prevDislikes + 1);
    };

    const changeColor = () => {
        setSegmentColor((prevColor) => (prevColor === '#212529' ? '#dc3545' : '#212529'));
    };

    const increaseCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    return (
        <Container className="mt-4 text-white">
            <Row>
                <Col md={4}>
                    <div className='d-flex justify-content-center align-items-center mt-3 mb-3'>
                        <div>
                            <h4>Likes: {likes}</h4>
                        </div>
                        <Button className='ms-5' variant="success" onClick={handleLike}>
                            Like
                        </Button>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <div>
                            <h4>Dislikes: {dislikes}</h4>
                        </div>
                        <Button className='ms-4' variant="danger" onClick={handleDislike}>
                            Dislike
                        </Button>
                    </div>
                </Col>
                <Col md={4} className="d-flex justify-content-center align-items-center" style={{ backgroundColor: segmentColor }}>
                    <Button variant="warning" onClick={changeColor}>
                        Cambiar Color
                    </Button>
                </Col>
                <Col md={4} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="rounded border mb-2">
                        {isEven(counter) ? <p className='p-2 m-0'>El número {counter} es par.</p> : <p className='p-2 m-0'>El número {counter} es impar.</p>}
                    </div>
                    <Button id='btnPar' variant="info" onClick={increaseCounter}>
                        Par o Impar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;