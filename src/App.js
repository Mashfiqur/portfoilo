import React from 'react';
import './App.css';
import { Navbar, Button, Nav,Form, FormControl,Container } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
import Profile from './Pages/Profile/profile';
import Information from './Pages/Information/information';
import Education from './Pages/Education/education';
import Skill from './Pages/Skills/skills';
import Certification from './Pages/Certification/certification';
import Experience from './Pages/Experience/experience';
import Project from './Pages/Projects/projects';


function App() {
  
  return (
    <div>
       

      <Router>
       <Container>
        
      <Navbar fixed="top" className="nav" bg="light" variant="dark">
        {/* <Navbar.Brand href="/profile">Profile</Navbar.Brand> */}
            <Nav className="mr-auto">
              <ul className="list-inline text-dark my-2">
                <li className="list-inline-item lnk mx-3 font-weight-bold">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/information">Information</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/education">Education</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/experience">Experience</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/certification">Certification</Link>
                </li>
                <li className="list-inline-item mx-3 font-weight-bold">
                  <Link to="/skill">Skill</Link>
                </li>
              </ul>
            </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
     </Container>
          <Switch>
            <Route path="/skill" component={ Skill } />
            <Route path="/certification">
              <Certification />
            </Route>
            <Route path="/projects" component={ Project } />
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/information">
              <Information />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
