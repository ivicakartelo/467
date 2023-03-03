import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import Update from './Update';

const Read = () => {
  const [posts, setPosts] = useState([]);
  const [updateId, setUpdateId] = useState('');
  const handleUpdate = (id) => {
    setUpdateId(id);
  };

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

  return (
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
        {posts.map(post => (
          <Table.Row key={post.id}>
            <Table.Cell>{post.id}</Table.Cell>
            <Table.Cell>{post.heading}</Table.Cell>
            <Table.Cell>{post.blogpost}</Table.Cell>
            <Table.Cell>
              <Button color='yellow'>Update</Button>
              <Button color='red' onClick={() => handleDelete(post.id)}>Delete</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Read;