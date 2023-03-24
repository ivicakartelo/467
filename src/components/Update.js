import React, { useState } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import axios from 'axios';

const Update = ({ post, handleUpdatePost, setShowEditForm }) => {
  const [heading, setHeading] = useState(post.heading);
  const [blogpost, setBlogpost] = useState(post.blogpost);

  const handleSubmit = () => {
    axios.put(`https://640114a00a2a1afebee5c77d.mockapi.io/post1/${post.id}`, {
      heading,
      blogpost
    })
      .then(() => {
        handleUpdatePost({
          id: post.id,
          heading,
          blogpost
        });
        setShowEditForm(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Heading</label>
        <Input
          placeholder='Heading'
          value={heading}
          onChange={e => setHeading(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Blogpost</label>
        <TextArea
          placeholder='Blogpost'
          value={blogpost}
          onChange={e => setBlogpost(e.target.value)}
        />
      </Form.Field>
      <Button type='submit' color='green'>Update</Button>
      <Button type='button' onClick={() => setShowEditForm(false)}>Cancel</Button>
    </Form>
  );
};

export default Update;