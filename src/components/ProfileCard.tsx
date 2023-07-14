import React from 'react'
import { Card, Container, Row, Col, Button, } from 'react-bootstrap'
import photo from '../images/profile-photo.jpg'


const ProfileCard: React.FC = () => {
    return (
        <div className='p-3'>
            <Card className='profile-card pb-md-5'>
                <Card.Img className='profile-image' variant="top" src={photo} />
                <Card.Body className='profile-body text-center pb-5'>
                    
                    <Card.Title className='profile-name text-center'>Isaiah Ozadhe</Card.Title>
                    <h6 className='text-center text-muted'>Full-stack Web Developer</h6>
                    <a href='https://drive.google.com/file/d/1P9vbwr2e5Bs0mcEReEURGnJOYBLHJeL9/view?usp=sharing' target='_blank' rel="noreferrer"><Button variant='secondary'>Download CV</Button></a>
                </Card.Body>

            </Card>
        </div>
    )
}

export default ProfileCard