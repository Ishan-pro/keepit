import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'

function Signup() {
  const emailref = useRef()
  const passwordref = useRef()
  const passwordconfirmref = useRef()
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign up</h2>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required ref={emailref}/>
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordref}/>
            </Form.Group>
            <Form.Group id='passwordconfirm'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='password' required ref={passwordconfirmref}/>
          </Form.Group>
        </Form>
          <Button type='submit' className='mt-2 form-control'>Submit</Button>
        </Card.Body>


      </Card>
      <p className='w-100 text-center mt-2'>
        Already have an account? Login
      </p>
    </>
  );
}

export default Signup;
