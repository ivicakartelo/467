import React, { useState } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Create = ({ addNewPost }) => {
  const navigate = useNavigate();
  const [heading, setHeading] = useState('');
  const [blogpost, setBlogpost] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const postData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://640114a00a2a1afebee5c77d.mockapi.io/post1`,
        {
          heading,
          blogpost,
        }
      );
      addNewPost(response.data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // set a time delay of 5 seconds
  };

  return (
    <Form>
      <Form.Field>
        <label>heading</label>
        <input
          placeholder='heading'
          onChange={(e) => setHeading(e.target.value)}
        />
      </Form.Field>
      <div className='ui form'>
        <div className='field'>
          <label>blogpost</label>
          <textarea
            placeholder='blogpost'
            onChange={(e) => setBlogpost(e.target.value)}
          ></textarea>
        </div>
      </div>
      {isLoading ? (
        <Loader active inline='centered' />
      ) : (
        <Button onClick={postData} type='submit'>
          Submit
        </Button>
      )}
    </Form>
  );
};

export default Create;