import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import userDB from '../../resources/userdb';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError('Ingrese un usuario y contraseña.');
            return;
        }

        // Busca el usuario en userDB
        const user = userDB.find((user) => user.username === username);

        if (user) {
            // Usuario encontrado, verifica la contraseña
            if (user.password === password) {
                // Contraseña correcta, redirige a la página Home
                navigate('/home');
            } else {
                // Contraseña incorrecta, muestra un mensaje de error
                setError('Contraseña incorrecta.');
            }
        } else {
            // Usuario no encontrado, muestra un mensaje de error
            setError('Usuario no encontrado.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100 text-white">
            <div className="border p-4 rounded">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contrase&ntilde;a:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contrase&ntilde;a:"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Iniciar Sesión
                    </Button>
                    <Link to='/Registro'>
                        <Button variant="secondary" className="ms-2">
                            Registrarse
                        </Button>
                    </Link>
                </Form>
                {error && <Alert variant="danger" className="mt-3 mb-0">{error}</Alert>}
            </div>
        </Container>
    );
}

export default Login;
