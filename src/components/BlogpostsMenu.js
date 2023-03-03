import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogpostsMenu({ blogposts }) {

    const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://640114a00a2a1afebee5c77d.mockapi.io/post`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])

    return (
    <>
    {APIData.map((post) =>
    <div key={post.id}> 
        <h1><Link to={`/${post.id}`}>
            {post.heading}
        </Link></h1>
        <p>{post.blogpost.substring(0, 150)}...</p>
    </div> 
    )}
    </>
    ) 
}
export default BlogpostsMenu