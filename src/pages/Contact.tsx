import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import ProfileCard from '../components/ProfileCard';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet'
import { MdEmail, MdPhone } from "react-icons/md";


const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_abzh00i', 'template_ch7syto', form.current as HTMLFormElement, 'E_Pnd7LOa_Lu0CK7B')
      .then((result) => {
        setSuccess("Thanks for reaching out. I'll get back to you as soon as possible")
        setLoading(false)
      }, (error) => {
        setError("There was a problem sending your message. please reach out by sending an email to tekkieware.gmail.com or isaiahozadhe247@gmail.com")
        setLoading(false)
      });
  };
  return (
    <Container fluid>
      <Helmet>
        <title>Isaiah Ozadhe - Software Engineer- Python, Javascript, Typescript, Django, Flask, Nextjs, React, Docker</title>
        <meta name="description" content="I wrote 'Hello Word' in VB.net shortly after learning HTML and CSS but my curousity led me to Python and i have since mastered
                the use of Django and Django Rest Framework. I combine these with React to build for the web and my journey so far
                has given birth to a couple of projects." />
      </Helmet>
      <Row>
        <Col lg={4} className='d-none d-md-block'>
          <ProfileCard />
        </Col>
        <Col lg={8} className='py-5 py-md-0'>
          {loading ? <Loader /> : <Container className='pages pt-md-5'>
            <Row className='justify-content-center'>
              <Col className='contact-means' md={10}>
                <MdEmail color='rgb(91, 80, 162)' size={20} /> <a href='mailto:isaiahozadhe247@gmail.com'>isaiahozadhe247@gmail.com</a>
              </Col>
              <Col className='contact-means py-2' md={10}>
                <MdPhone color='rgb(91, 80, 162)' size={20} /> <a href='tel:+2348109125393'>+2348109125393</a>
              </Col>
            </Row>
            <Row className='pt-3 justify-content-center'>
              <Col md={10} className='pt-md-3'>
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
          </Container>}


        </Col>
      </Row>
    </Container>



  )
}

export default Contact