import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import photo from '../images/profile-photo.jpg'
import {FaReact, FaSass} from 'react-icons/fa'
import {BiLogoCss3, BiLogoHtml5, BiLogoRedux, BiLogoBootstrap, BiLogoTypescript} from 'react-icons/bi'



const ProfileCard: React.FC = () => {
    return (
        <div className='p-3'>
            <Card>
                <Card.Img className='profile-image' variant="top" src={photo} />
                <Card.Body className='profile-body'>

                    <Card.Title className='profile-name text-center'>Isaiah Ozadhe</Card.Title>
                    <hr />
                    <h6 className='profile-title'>Backend</h6>
                    <hr />
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    <hr />
                    <h6 className='profile-title'>Frontend</h6>
                    <hr />
                    <Container>
                    <Row className='frontend'>
                    <Col xs={3}>
                     <BiLogoHtml5 size={50} style={{ fill: '#e34c36'}} />
                     </Col> 
                     <Col xs={3}>
                     <BiLogoCss3 size={50} style={{ fill: '#3965f1'}} />
                     </Col> 
                     <Col xs={3}>
                     <BiLogoBootstrap size={50} style={{ fill: '#764abc'}} />
                     </Col> 
                     <Col xs={3}>
                     <FaReact size={50} style={{ fill: '#61dbfb'}} />
                     </Col>
                     <Col xs={3}>
                     <BiLogoRedux size={50} style={{ fill: '#764abc'}} />
                     </Col> 
                     <Col xs={3}>
                     <BiLogoTypescript size={50} style={{ fill: '#007acc'}} />
                     </Col> 
                     <Col xs={3}>
                     <FaSass size={50} style={{ fill: '#c69'}} />
                     </Col> 
                     
                     
                     
                    </Row>
                    </Container>
                    <hr />
                    <h6 className='profile-title'>Languages</h6>
                    <hr />
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>

            </Card>
        </div>
    )
}

export default ProfileCard