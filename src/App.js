import React, {useState} from 'react'
import logo from './logo.svg';
import Signup from './components/signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      <Container className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
        <div className='w-100' style={{maxWidth:'400px'}}>
            <Signup/>
        </div>
      </Container>
    </>
  );
}

export default App;
