import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

const Create = () => {
    const [heading, setHeading] = useState('');
    const [blogpost, setBlogpost] = useState('');
    const postData = () => {
        axios.post(`https://640114a00a2a1afebee5c77d.mockapi.io/post`, {
            heading,
            blogpost
        })
    }
    return (
        <Form>
        <Form.Field>
            <label>heading</label>
            <input placeholder='heading' onChange={(e) => setHeading(e.target.value)} />
        </Form.Field>
        <div class="ui form">
            <div class="field">
                <label>blogpost</label>
                <textarea placeholder='blogpost' onChange={(e) => setBlogpost(e.target.value)}></textarea>
            </div> 
        </div>
        
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
    )
}
    

export default Create;