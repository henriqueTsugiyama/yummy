import React from 'react';
import { Container , Button} from 'react-bootstrap';
import { NavBar } from '../../components/Navbar/'
import '../pagesStyles.css';


export const About = ()=> {
    return (
        <>
            <NavBar />
            <Container className='container' fluid>
                <h1>About Page</h1>
                <Button variant="primary">Learn more</Button>
      
            </Container>
            
        </>
    );
}