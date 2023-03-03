import { Link, Outlet } from 'react-router-dom'
import BlogPostsMenuLeft from './components/BlogPostsMenuLeft';
import "./App.css"
import Create from './components/Create';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://640114a00a2a1afebee5c77d.mockapi.io/post`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])

  return (
    <div className="container">
      <div className="grid_6 last">
        <Link to="/">Home</Link>
      </div>
      <div className="grid_2">
        <BlogPostsMenuLeft blogposts={ APIData }/>
      </div>
      <div className="grid_4 last">
        <Outlet />
      </div>
      <div className="grid_6 last">
        <Create />
      </div>
    </div> 
  )
}
export default App