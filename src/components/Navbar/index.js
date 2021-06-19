import React from 'react';
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './style.css';
import yummyLogo from '../../assets/pictures/yummy_logo.png'

export const NavBar = ()=> {
    return (
            <Navbar fill fixed='top' className="navbar-main justify-content-center " >   
               
                    <Link to="/">
                        <Image
                            src={yummyLogo}
                            rounded
                            className="logo"
                            />
                    </Link>

                    <Nav 
                    activeKey="/home"
                    >
                        <Nav.Item>
                            <Nav.Link href="/products">
                                Produtos
                            </Nav.Link>
                        </Nav.Item>
                    
                        <Nav.Item>
                            <Nav.Link href="/about">
                                Sobre
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/contact">
                                Contato
                            </Nav.Link>
                        </Nav.Item>
                </Nav>
            </Navbar>
    );
}