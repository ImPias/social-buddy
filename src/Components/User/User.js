import React, { useState, useEffect } from 'react';
import ShowUser from '../ShowUser/ShowUser';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                users.map(user => <ShowUser user={user} key={user.id}></ShowUser>)
            }
        </div>
    );
};

export default User;