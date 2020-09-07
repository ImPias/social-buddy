import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShowPost from '../ShowPost/ShowPost';

const Post = () => {
    const { userId } = useParams()
    const [posts, setPosts] = useState([])
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                posts.map(post => <ShowPost post={post} key={post.id}></ShowPost>)
            }
        </div>
    );
};

export default Post;