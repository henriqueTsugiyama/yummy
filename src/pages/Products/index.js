import React from 'react';
import { Button, Container,  } from "react-bootstrap";
import { NavBar } from '../../components/Navbar/'

import './style.css';

export const Products = ()=> {
    return (
        <>
            <NavBar />
            <Container className='container' fluid>
                <h1>Products Page</h1>
                <Button variant="primary">Learn more</Button>
      
            </Container>
            
        </>
    );
}