import React, { useState, useRef } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_abzh00i', 'template_ch7syto', form.current as HTMLFormElement, 'E_Pnd7LOa_Lu0CK7B')
      .then((result) => {
        setLoading(false)
        setSuccess("Thanks for reaching out. I'll get back to you as soon as possible")
      }, (error) => {
        setLoading(false)
        setError("There was a problem sending your message. please reach out by sending an email to tekkieware.gmail.com or isaiahozadhe247@gmail.com")
      });
      setLoading(false)
  };
  return (
    <Row className='pt-3 justify-content-center'>
      <Col md={6}>
        <Container className='contact-card'>
        <h1 className='contact-heading py-2'>Get in touch</h1>
        {error && <Alert variant="danger" >{error}</Alert>}
        {success && <Alert variant='success'>{success}</Alert>}
            <Form ref={form} onSubmit={sendEmail}>
          <Row>
           
              <Col md={6}>

                <Form.Group
                  className="mb-3"
                  controlId="Name"
                >
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="Email"
                >
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    name="user_email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group
                  className="mb-3"
                  controlId="Message"
                >

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </Form.Group>

              </Col>
              <Col xs={12} className='text-center pb-3'>
                  <input className='btn btn-primary' type="submit" value="Send Message" />
                  </Col>
          
          </Row>
          </Form>
        </Container>

      </Col>
    </Row>
  )
}

export default Contact