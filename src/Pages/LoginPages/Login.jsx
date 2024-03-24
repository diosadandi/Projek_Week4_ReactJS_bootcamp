import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthtenticationContext';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth();
    const [validated, setValidated] = useState(false);

    const handleLogin = async(e) => {
        e.prevenDefault();
        try {
            await login(username,password)
            navigate(`/List Product`, { replace: true })
            
        } catch (error) {
            console.error("login failed : ", error)
            console.log("login failed : ", error)
        }

        setValidated(false)       
    }


  return (
    <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Form.Group controlId='validationUserName' className='mb-4'>
        <Form.Label>Username</Form.Label>
            <Form.Control
            required
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type='text'
            placeholder='username'
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='validationUserPassword' className='mb-4'>
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='password'
            />
            <Form.Control.Feedback>Looks good</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default Login
