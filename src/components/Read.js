import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Update from './Update';
import Create from './Create';

function Read() {
  const [posts, setPosts] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
      fetch('https://640114a00a2a1afebee5c77d.mockapi.io/post1')
        .then(response => response.json())
        .then(posts => setPosts(posts))
        .catch(err => console.log(err));
    
    alert('Component Read.js has finished rendering!');
  }, []);

  const handleAddNewPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const handleDelete = (id) => {
    fetch(`https://640114a00a2a1afebee5c77d.mockapi.io/post1/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setPosts(posts.filter(post => post.id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    setUpdateId(id);
    setShowEditForm(true);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    setShowEditForm(false);
  };

  return (
    <div className="container">
      <Link to="/">Home</Link> | { }
      <Link to="/read">Admin</Link>
      <Create addNewPost={handleAddNewPost} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Heading</Table.HeaderCell>
            <Table.HeaderCell>Blogpost</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {posts.slice().reverse().map(post => ( // use slice() to create a copy of the array before reversing it
            <Table.Row key={post.id}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>{post.heading}</Table.Cell>
              <Table.Cell>{post.blogpost}</Table.Cell>
              <Table.Cell>
                {showEditForm && updateId === post.id ? (
                  <Update
                    post={post}
                    handleUpdatePost={handleUpdatePost}
                    setShowEditForm={setShowEditForm}
                  />
                ) : (
                  <Button color='yellow' onClick={() => handleUpdate(post.id)}>
                    Update
                  </Button>
                )}
                <Button color='red' onClick={() => handleDelete(post.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Read;