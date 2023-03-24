import React, { useState } from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted:', username, password);
    handleClose();
  };

  return (
    <Modal
      onClose={handleClose}
      onOpen={handleOpen}
      open={isOpen}
      trigger={<Button>Login</Button>}
    >
      <Modal.Header>Login</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;