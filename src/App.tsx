import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from './components/Navigation';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProfileCard from './components/ProfileCard';


const App: React.FC = () => {
  return (
    <div className='py-4 py-md-5'>
      <Container>
        <Router>
          <Row>
            <Navigation />
          </Row>
          <Row>
            <Col lg={4}>
              <ProfileCard />
            </Col>
            <Col lg={8}>
              <Routes>

                <Route path='/' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />

              </Routes>
            </Col>
          </Row>

        </Router>
      </Container>

    </div>

  );
}

export default App;
