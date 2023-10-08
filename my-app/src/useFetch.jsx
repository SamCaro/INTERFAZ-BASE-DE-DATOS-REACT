import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UseFetch() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error(error));
    }, [userId]);

    if (!user) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container pantallaTres">
            <h2>Detalles</h2>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
            <Link to="/user">Volver al Listado</Link>
        </div>
    );
}

export default UseFetch;
