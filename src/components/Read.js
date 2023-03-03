import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import Update from './Update';
import Create from './Create';


const Read = () => {
  
  const [posts, setPosts] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    axios.get(`https://640114a00a2a1afebee5c77d.mockapi.io/post`)
      .then(res => {
        const posts = res.data;
        setPosts(posts);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://640114a00a2a1afebee5c77d.mockapi.io/post/${id}`)
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
    const updatedPosts = posts.map(post => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });
    setPosts(updatedPosts);
    setShowEditForm(false);
  };

  return (
    <>
    <Create />
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
    </>
    
  );
};

export default Read;