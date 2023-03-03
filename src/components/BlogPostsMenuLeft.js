import { Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react';

function BlogPostsMenuLeft({ blogposts }) {

    

    return (   
        <ul>
            {blogposts.map((post) => 
                <li key={post.id}>
                    <Link to={`/${post.id}`}>
                    {post.heading}
                    </Link>
                </li>
                )
            }
        </ul>
    )  
}
export default BlogPostsMenuLeft