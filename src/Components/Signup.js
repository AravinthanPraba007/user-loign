import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert} from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        
        //Call the sign up api
        setError("")
    }

    return (
        <>
         <Card>
         <Card.Body>
             <h2 className="text-center mb-4">Sign up</h2>
    {error && <Alert variant="danger">{error}</Alert>}
             <Form onSubmit={handleSubmit}>
                 <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef} required/>
                 </Form.Group>
                 <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef} required/>
                 </Form.Group>
                 <Form.Group id="password-confirm">
                     <Form.Label>Password Confirmation</Form.Label>
                     <Form.Control type="password" ref={passwordConfirmRef} required/>
                 </Form.Group>
                 <Button className="w-100" type="submit">Sign Up</Button>
             </Form>
             </Card.Body>
         </Card>
         <div className="w-100 text-center mt-2">
            Already have a account? Log In
         </div>   
        </>
    )
}