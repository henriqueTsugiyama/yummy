import React from 'react';
import { Container , Button} from 'react-bootstrap';
import { NavBar } from '../../components/Navbar/'
import '../pagesStyles.css';


export const Contact = ()=> {
    return (
        <>
            <NavBar />
            <Container className='container' fluid>
                <h1>Contact Page</h1>
                <Button variant="primary">Learn more</Button>
      
            </Container>
            
        </>
    );
}