import React from 'react'
import { Container, Row, Col, OverlayTrigger, Tooltip, Image } from 'react-bootstrap'
import { FaReact, FaNpm, FaSass, FaGithubSquare } from 'react-icons/fa'
import { BiLogoCss3, BiLogoHtml5, BiLogoRedux, BiLogoBootstrap, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandDjango, TbBrandJavascript, TbBrandVscode } from 'react-icons/tb'
import { SiPostman } from 'react-icons/si'
import { BsGit } from 'react-icons/bs'
import python from '../images/python-logo.png'
import sql from '../images/sql-logo.png'
import drf from '../images/drf-logo.png'
import ProfileCard from '../components/ProfileCard'

const About: React.FC = () => {
  return (
    <Container fluid>
      <Row>
      <Col lg={4}>
        <ProfileCard />
      </Col>
      <Col lg={8}>
        <Container className='pages'>
          <Row className='text-center'>
            <Col>
              <h1 className='about-title  '>Hello, I am a <b className='about-title-note'>full-stack developer</b>.</h1>
              <p className='about-message'>I wrote 'Hello Word' in VB.net shortly after learning HTML and CSS but my curousity led me to Python and i have since mastered
                the use of Django and Django Rest Framework. I combine these with React to build for the web and my journey so far
                has given birth to a couple of projects which you can explore in my PORTFOLIO.  I am constantly driven to learn and improve, and recently,
                I have been delving into Typescript, keeping myself up-to-date with the latest developments in the field. By the time you read this, it'll probably need an update.
                Oh, and i almost forgot to add that i have a Higher National Diploma in Computer
                Engineering Technology from Delta State Polytechnic, Ozoro.
              </p>
            </Col>
          </Row>
          <hr />
          <h6 className='profile-title text-muted'>Programming Languages, Technologies and Tools.</h6>
          <hr />

          <Row>
            <OverlayTrigger placement="top" overlay={<Tooltip>Python</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <Image src={python} height={40} alt='python logo' />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Django</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <TbBrandDjango size={40} style={{ color: '#fff', fill: '#092e20' }} />

              </Col>
            </OverlayTrigger>
            <Col xs={4} sm={3} md={1}>
              <OverlayTrigger placement="top" overlay={<Tooltip>Django Rest Framework</Tooltip>}>
                <Image src={drf} height={30} alt='drf logo' />
              </OverlayTrigger>
            </Col>
            <Col xs={4} sm={3} md={1}>
              <OverlayTrigger placement="top" overlay={<Tooltip>Microsoft Sqlserver</Tooltip>}>
                <Image src={sql} height={40} alt='mssql logo' />
              </OverlayTrigger>
            </Col>
            <OverlayTrigger placement="top" overlay={<Tooltip>Javascript</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <TbBrandJavascript size={40} style={{ fill: '#F0DB4F' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>TypeScript</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BiLogoTypescript size={40} style={{ fill: '#007acc' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>HTML5</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BiLogoHtml5 size={40} style={{ fill: '#e34c36' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>CSS3</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BiLogoCss3 size={40} style={{ fill: '#3965f1' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Bootstrap</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BiLogoBootstrap size={40} style={{ fill: '#764abc' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>React</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <FaReact size={40} style={{ fill: '#61dbfb' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Redux</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BiLogoRedux size={40} style={{ fill: '#764abc' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Git</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <BsGit size={40} style={{ fill: '#F1502F' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>SASS</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <FaSass size={40} style={{ fill: '#c69' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>VS Code</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <TbBrandVscode size={40} style={{ fill: '#0078d7', color: '#0078d7' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Github</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <FaGithubSquare size={40} style={{ fill: '#171515' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Postman</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <SiPostman size={40} style={{ fill: '#ef5b25' }} />

              </Col>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip>Npm</Tooltip>}>
              <Col xs={4} sm={3} md={1}>

                <FaNpm size={40} style={{ fill: '#CC3534' }} />

              </Col>
            </OverlayTrigger>
          </Row>

          <hr />
          <h6 className='profile-title text-muted'>Hobbies.</h6>
          <hr />
          <p>In my leisure time, I enjoy engaging in conversations and playing football,
            which allows me to unwind and connect with others. Additionally, I have a passion for video games, particularly those related to soccer.
            Exploring these virtual environments not only provides entertainment but also allows me to stay connected to my favorite sport. Furthermore,
            I allocate time to leisure reading, where I can enjoy captivating stories and narratives without the need for deep analysis or retention.
          </p>
          <hr />




        </Container>
      </Col>
      </Row>
    </Container>


  )
}

export default About