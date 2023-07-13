import React from 'react'
import logo from '../images/logo.png'
import {Navbar, Nav, Image, Container, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {FaGithubSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'

const Navigation:React.FC = () => {
    return (
          <Container>
          <Navbar expand="md" collapseOnSelect>
            <Container>
          <Navbar.Brand>
              <Image 
                src={logo}
                width="60"
                className="d-inline-block align-top img-fluid"
                alt="Tekkieware logo"
              /> 
            </Navbar.Brand>
            
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
          <Nav className='ms-auto text-center'>
              <LinkContainer to='/'>
              <Nav.Link>About Me</Nav.Link>
              </LinkContainer>
              
              <LinkContainer to='/portfolio'>
              <Nav.Link>Portfolio</Nav.Link>
              </LinkContainer>
              <LinkContainer to='contact'>
              <Nav.Link>Contact Me</Nav.Link>
              </LinkContainer>
              
              
            </Nav>
            <Nav className='ms-auto text-center'>
              
              <span>
              <OverlayTrigger placement="top" overlay={<Tooltip>My Github Profile</Tooltip>}><a href='https://github.com/tekkieware' target='_blank' rel="noreferrer"><FaGithubSquare size={30} style={{ fill: '#171515' }} /></a></OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>My Linkedin Profile</Tooltip>}><a href='www.linkedin.com/in/isaiah-ozadhe' target='_blank' rel="noreferrer"><FaLinkedin size={30} style={{ fill: '#0077b5' }} /></a></OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>My Facebook Profile</Tooltip>}><a href='https://web.facebook.com/isaiah.ozadhe/' target='_blank' rel="noreferrer"><FaFacebookSquare size={30} style={{ fill: '#3b5998'}} /></a></OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>My Twitter Profile</Tooltip>}><a href='https://twitter.com/Tekkieware' target='_blank'rel="noreferrer"><FaTwitterSquare size={30} style={{ fill: '#00acee'}} /></a></OverlayTrigger>
                
                </span>
              
              
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          </Container>
    )
}

export default Navigation