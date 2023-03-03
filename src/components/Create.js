import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Create = () => {
    const navigate = useNavigate();
    const [heading, setHeading] = useState('');
    const [blogpost, setBlogpost] = useState('');
    const postData = () => {
        axios.post(`https://640114a00a2a1afebee5c77d.mockapi.io/post`, {
            heading,
            blogpost
        })
        navigate('/');
    }
    return (
        <Form>
        <Form.Field>
            <label>heading</label>
            <input placeholder='heading' onChange={(e) => setHeading(e.target.value)} />
        </Form.Field>
        <div className="ui form">
            <div className="field">
                <label>blogpost</label>
                <textarea placeholder='blogpost' onChange={(e) => setBlogpost(e.target.value)}></textarea>
            </div> 
        </div>
        
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
    )
}
    

export default Create;