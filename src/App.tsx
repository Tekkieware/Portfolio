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
    <div className='py-md-5'>
      
        <Router>
        <Container className='content-card py-4'>
          <Row>
            <Col>
            <Navigation />
            </Col>
          </Row>
          <Row className='py-4'>
        
              <Routes>

                <Route path='/' element={<About />} />
                <Route path='portfolio' element={<Portfolio />} />
                <Route path='contact' element={<Contact />} />

              </Routes>
          </Row>
 </Container>

        </Router>
     
    </div>

  );
}

export default App;
