import { Link, useNavigate } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import userDB from '../../resources/userdb';

function Registro() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        fullName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistration = (e) => {
        e.preventDefault();

        // Validar si los campos están completos
        if (formData.username && formData.password && formData.email && formData.fullName) {
            // Crear un nuevo usuario
            const newUser = {
                id: userDB.length,
                username: formData.username,
                password: formData.password,
                email: formData.email,
                fullName: formData.fullName,
            };

            // Agregar el nuevo usuario a la base de datos
            userDB.push(newUser);

            // Mostrar mensaje de éxito
            setSuccessMessage('Registro exitoso. ¡Bienvenido!');

            // Reiniciar el formulario después de agregar el usuario
            setFormData({
                username: '',
                password: '',
                email: '',
                fullName: '',
            });

            console.log('userDB:', userDB);

            // Redirigir al usuario a la página de inicio de sesión después de un breve retraso
            setTimeout(() => {
                navigate('/');
            }, 1200);
        } else {
            setError('Todos los campos son requeridos.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 text-white">
            <div className="border p-4 rounded">
                <Form onSubmit={handleRegistration}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Nombre de usuario:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ejemplo@email.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Nombre y Apellido:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Bruce Wayne"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                    <Link to='/'>
                        <Button variant="secondary" className="ms-2">
                            Iniciar Sesión
                        </Button>
                    </Link>
                </Form>
                {successMessage && <Alert variant="success" className="mt-3 mb-0">{successMessage}</Alert>}
                {error && <Alert variant="danger" className="mt-3 mb-0">{error}</Alert>}
            </div>
        </Container>
    );
}

export default Registro;
