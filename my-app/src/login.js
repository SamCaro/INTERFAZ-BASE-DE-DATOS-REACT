import React, { useState } from 'react';
import Input from './input';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            setPassword(value)
        }
    }

    function handleLogin() {
        if (user === 'holamundo' && password === 'cool') {
            navigate('/user')
        } else {
            setError('Usuario o contraseña incorrecto, Bye')
        }
    }

    return (
        <div className="container pantallaUno">
            <h2>Test Interview Tech 2023</h2>
            <p>Usuario: holamundo Contraseña: cool</p>
            <label>Usuario</label>
            <Input
                attribute={{
                    id: "usuario",
                    name: "usuario",
                    type: "text"
                }}
                handleChange={handleChange}
            />
            <label>Contraseña</label>
            <Input
                attribute={{
                    id: "contraseña",
                    name: "contraseña",
                    type: "password"
                }}
                handleChange={handleChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="button" onClick={handleLogin}>Ingresar</button>
            <footer> SANDRA CARO | LABORATORIA </footer>
        </div>
    );
}

export default Login;

