import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import codeconfab from '../images/codeconfab.jpg'
import { FaLaptopCode, FaLink } from 'react-icons/fa'

const Portfolio: React.FC = () => {
  return (
    <Container className='pages'>
      <Row className='p-3 project-page justify-content-center'>
        <Card className='project-card p-0 py-0'>
          <Card.Header className='text-center p-0 '>
            <span className='p-sm-2 p-md-5 p-lg-4 p-xl-5'>
              <Button variant='secondary '><FaLink className='m-1 d-none' size={15} style={{ fill: '#171515' }} />Live Site</Button>
            </span>
            CodeConfab
            <span className='p-sm-2 p-md-5 p-lg-4 p-xl-5'>
              <Button variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button>
              </span>
              </Card.Header>
          <Card.Body>
            <Card.Img variant="top" src={codeconfab} />
          </Card.Body>
          <Card.Footer className="text-muted">
            <p><b>Description:</b> Codeconfab was built as community for developers with varying experience levels in tons of programming languages where people can work together to be better equipped to solve problems while coding.
              People can interact via one on one chats, make friends, ask for help from friends, paste code and even share resources.</p>
            <p><b>Technologies Used:</b> HTML, CSS, Javascript, Python, Django.</p>
            <p><b>Roles:</b></p>
            <ul>
              <li>Utilized Django's ORM to perform data modeling, ensuring efficient and structured database operations.</li>
              <li>Developed backend logic, including implementing authentication systems and establishing communication between the frontend and backend using Django's templating system.</li>
              <li>Frontend Design etc.</li>
            </ul>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  )
}

export default Portfolio