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
                    <h6 className='text-center text-muted profile-sub'>Software Engineer</h6>
                    <a href='https://drive.google.com/file/d/1Gp0KiRFRtYAG7-QMv3M4AVBOSudxqw1Y/view?usp=sharing' target='_blank' rel="noreferrer"><Button variant='secondary'>Download My Resume</Button></a>
                </Card.Body>

            </Card>
        </div>
    )
}

export default ProfileCard