import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import codeconfab from '../images/codeconfab.png'
import eplaza from '../images/eplaza.png'
import knight from '../images/knight.png'
import portfolio from '../images/portfolio.png'
import gocommute from '../images/gocommute.png'
import pizzalolo from '../images/pizzalolo.png'
import heed from '../images/heed.png'
import { FaLaptopCode, FaLink, FaVideo } from 'react-icons/fa'

const Portfolio: React.FC = () => {
  return (
    <Container className='pages'>
       <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
              My Portfolio
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={portfolio} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='/' target='_blank' rel="noreferrer"><Button variant='secondary '><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>


              <a href='https://github.com/Tekkieware/Portfolio' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> My personal website/portfolio.
           </p>
          <p><b>Technologies:</b> SASS, React,Typescript, Bootstrap.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Developed it using React, SASS, and TypeScript to implement front-end functionalities.</li>
            <li> Designed an aesthetically pleasing and user-friendly interface for the website, focusing on user-centered design principles and utilizing SASS for custom styles.</li>
            <li>Implemented TypeScript to enhance code quality, maintainability, and scalability, utilizing its features and compile-time checks for robust development.</li>
            </ul>
        </Col>

      </Row>
      <hr />
      <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
              Gocommute
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={gocommute} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='https://gocommute.com.ng/' target='_blank' rel="noreferrer"><Button variant='secondary '><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>


              <a href='https://github.com/Tekkieware/Gocommute' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> Official company website of Gocommute Travels.
           </p>
          <p><b>Technologies:</b> CSS3, React, Bootstrap.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Developed an intuitive and visually appealing user interface using React, Bootstrap, and CSS3, ensuring a good user experience across devices and maintaining consistent branding.</li>
            <li>Implemented search engine optimization (SEO) strategies by optimizing meta tags, headings, URLs, and content structure to improve organic search rankings and drive targeted traffic to the website.</li>
            <li>Integrated Google Analytics to track website traffic, user behavior, and conversion metrics, utilizing data-driven insights for further optimization and decision-making.</li>
            </ul>
        </Col>

      </Row>
      <hr />
       <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
              Knight Corporate Services
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={knight} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='https://knightservices.ng/' target='_blank' rel="noreferrer"><Button variant='secondary '><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>


              <a href='https://github.com/Tekkieware/Knight-Services' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> Official company website of Knight Corporate Services.
           </p>
          <p><b>Technologies:</b> CSS3, React, Bootstrap.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Developed an intuitive and visually appealing user interface for the website using React, Bootstrap and CSS3, ensuring an optimal user experience across different devices and screen sizes.</li>
            <li>Ensured consistent branding and maintained a cohesive design language throughout the website.</li>
            <li>Optimized meta tags, headings, URLs, and content structure to improve organic search rankings and drive targeted traffic to the website</li>
            <li>Integrated Google Analytics to track website traffic, user behavior, and conversion metrics, providing valuable insights for further optimization and decision-making.</li>
          </ul>
        </Col>

      </Row>
      <hr />
      <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
            Heed
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={heed} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='https://heed.cx/' target='_blank' rel="noreferrer"><Button variant='secondary'><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>

              <a className='m-2 d-none d-md-inline' href='https://www.linkedin.com/posts/heed-cx_are-you-looking-to-improve-your-customer-activity-7024745444949827584-Fhwi?utm_source=share&utm_medium=member_desktop' target='_blank' rel="noreferrer"><Button variant='secondary'><FaVideo className='m-1' size={15} style={{ fill: '#171515' }} />Presentation</Button></a>

              <a  href='https://github.com/workshopapps/customersupport.web' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> Heed is an Ai solution that offers transcription and sentimental analysis to company call records to give feedback on their customer and support team agent performance.</p>
          <p><b>Technologies:</b> CSS3, React, Python, FastAPI, AWS S3.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Worked with the backend team to implement a robust and scalable API architecture using FastAPI.</li>
            <li>Implemented Natural Language Toolkit's(NLTK) libraries and algorithms to analyze the sentiment of text data and utilized existing models to classify sentiment as positive, negative, or neutral.</li>
            <li>Designed and developed endpoints that receive text input, perform sentiment analysis using the NLTK module, and return the sentiment analysis results</li>
            <li>Implemented and integrated the Stripe payment system, utilizing Stripe CLI for configuring web hooks for subscription fulfilment.</li>
            <li>Utilized Postman to generated a well-structured and easily accessible API documentation for the sentiment analysis API, documenting the API endpoints, their functionality, and the required input/output parameters.</li>
          </ul>
        </Col>

      </Row>
      <hr />
      <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
            PizzaIolo
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={pizzalolo} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='https://www.linkedin.com/posts/isaiah-ozadhe_internship-react-oasisinfobyte-activity-6904721270194466816-Xrsp?utm_source=share&utm_medium=member_desktop' target='_blank' rel="noreferrer"><Button variant='secondary '><FaVideo className='m-1' size={15} style={{ fill: '#171515' }} />Presentation</Button></a>


              <a href='https://github.com/Tekkieware/OIBSIP/tree/main/PizzaIolo' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> A custom pizza delivery application that empowers users to 
          create their own personalized pizzas based on their preferences. With this platform, users can select 
          their desired crust type, sauce options, cheese varieties, 
          and a wide array of vegetables to create the perfect pizza combination. 
          One of the standout features of the application is its dynamic pricing functionality. The price of each custom pizza is calculated based on the selected crust, sauce, cheese, and vegetable options chosen by the user. This ensures transparency and accuracy in pricing, allowing users to see the cost of their custom pizza before making a payment and placing an order.</p>
          <p><b>Technologies:</b> CSS3, React, Python, Django Rest Framework, Redux.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Data modeling using Django's ORM for efficient data management.</li>
            <li>Developed APIs using Django Rest Framework for authentication, order processing, and implementation of various business logic functionalities.</li>
            <li>Developed an admin interface for intentory and order manaagement</li>
            <li>Frontend Design</li>
            <li>APIs integration on the frontend, enabling seamless communication between the user interface and the backend functionalities.</li>
            <li>Successfully integrated the RazorPay payment system to facilitate secure and reliable order payment processing.</li>
          </ul>
        </Col>

      </Row>
      <hr />
      <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
              Eplaza
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={eplaza} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='http://eplaza.pythonanywhere.com/' target='_blank' rel="noreferrer"><Button variant='secondary '><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>


              <a href='https://github.com/Tekkieware/E-plaza' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> Eplaza is a dynamic E-commerce website that allows users browse through a wide range
           of products and add them to their carts. From there, they can proceed to make secure and convenient online payments for their orders.
           One of Eplaza's key features is its robust admin interface which gives administrators complete control over the inventory, allowing them to update product information, track stock levels, and manage order fulfillment.
           </p>
          <p><b>Technologies:</b> CSS3, React, Python, Django Rest Framework, Redux.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Conducted data modeling using Django's object-relational model to design and implement a robust database structure for efficient data management.</li>
            <li>Developed APIs using Django Rest Framework for seamless authentication, order processing, and implementation of various business logic functionalities.</li>
            <li>Frontend Design</li>
            <li>APIs integration on the frontend, enabling seamless communication between the user interface and the backend functionalities.</li>
            <li>Successfully integrated the Flutterwave payment system to facilitate secure and reliable order payment processing.</li>
          </ul>
        </Col>

      </Row>
      <hr />
      <Row className='p-3'>
        <Col md={6}>
          <Card className='project-card p-0 py-0'>
            <Card.Header className='text-center p-0 '>
              CodeConfab
            </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={codeconfab} />
            </Card.Body>
            <Card.Footer className="text-muted">

              <a href='http://codeconfab.pythonanywhere.com/' target='_blank' rel="noreferrer"><Button variant='secondary '><FaLink className='m-1' size={15} style={{ fill: '#171515' }} />Live Site</Button></a>


              <a href='https://github.com/Tekkieware/CodeConfab' target='_blank' rel="noreferrer"><Button className='float-end' variant='secondary'><FaLaptopCode className='m-1' size={15} style={{ fill: '#171515' }} />Source Code</Button></a>

            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} className='project-description py-4 py-md-0 p-3'>
          <p><b>Description:</b> Codeconfab was built as community for developers with varying experience levels in tons of programming languages where people can work together to be better equipped to solve problems while coding.
            People can interact via one on one chats, make friends, ask for help from friends, paste code and even share resources.</p>
          <p><b>Technologies:</b> HTML, CSS, Javascript, Python, Django.</p>
          <p><b>Roles:</b></p>
          <ul>
            <li>Utilized Django's ORM to perform data modeling, ensuring efficient and structured database operations.</li>
            <li>Developed backend logic, including implementing authentication systems and establishing communication between the frontend and backend using Django's templating system.</li>
            <li>Frontend Design etc.</li>
          </ul>
        </Col>

      </Row>
    </Container>
  )
}

export default Portfolio