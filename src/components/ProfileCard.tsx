import React from 'react'
import { Card, Container, Row, Col, Button, } from 'react-bootstrap'
import photo from '../images/profile-photo.jpg'


const ProfileCard: React.FC = () => {
    return (
        <div className='p-3'>
            <Card className='profile-card'>
                <Card.Img className='profile-image' variant="top" src={photo} />
                <Card.Body className='profile-body text-center'>
                    
                    <Card.Title className='profile-name text-center'>Isaiah Ozadhe</Card.Title>
                    <h6 className='text-center text-muted'>Full-stack Web Developer</h6>
                    <Button variant='secondary'>Download CV</Button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default ProfileCard