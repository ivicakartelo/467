import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

const Update = () => {
  const [id, setId] = useState('');
  const [heading, setHeading] = useState('');
  const [blogpost, setBlogpost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://640114a00a2a1afebee5c77d.mockapi.io/post/${id}`, {
      heading,
      blogpost
    })
      .then(() => {
        setId('');
        setHeading('');
        setBlogpost('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>ID</label>
        <input placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Field>

      <Form.Field>
        <label>Heading</label>
        <input placeholder='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} />
      </Form.Field>

      <Form.Field>
        <label>Blogpost</label>
        <textarea placeholder='Blogpost' value={blogpost} onChange={(e) => setBlogpost(e.target.value)} />
      </Form.Field>

      <Button type='submit'>Update</Button>
    </Form>
  );
};

export default Update;