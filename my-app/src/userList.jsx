import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('')

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = []
  if (!search) {
    results = users
  } else {
    results = users.filter((dato) => {
      return dato.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container pantallaDos">
      <input value={search} onChange={searcher} type='text' placeholder='Search' />
      <h2>Lista de Usuarios</h2>
      <ul>
        {results.map((user) => (
          <ul key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </ul>
        ))}
      </ul>
      <Link to="/">Salir</Link>
    </div>
  );
}

export default UserList;
