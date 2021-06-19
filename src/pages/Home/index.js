import React from 'react';
import { Container , Button} from 'react-bootstrap';
import { NavBar } from '../../components/Navbar/'
import '../pagesStyles.css';


export const Home = ()=> {
    return (
        <>
            <NavBar />

            <Container className='container' fluid>
                <div>
                <h2>Bem vindo a Yummy Cheesecake!</h2>
                <p>
                    A Yummy! Cheesecake surgiu do amor pessoal por cheesecakes.
                    Sempre gostei de confeitaria em geral, mas decidi me especializar em um 
                    doce para tentar oferecer a melhor experiência para os consumidores.
                    E quando digo <strong>melhor experiência</strong>, me refiro a se sentir nas <strong>nuvens</strong>!
                </p>
                <Button size='lg' variant="primary">Ver menu</Button>
                </div>
                
      
            </Container>
        </>

            
    );
}
