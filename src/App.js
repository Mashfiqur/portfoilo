import './App.css';
import { Navbar, Button, Nav,Form, FormControl,Container } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route, Link } from "react-router-dom";
import Profile from './Pages/Profile/profile';
import Information from './Pages/Information/information';
import Education from './Pages/Education/education';
import Skill from './Pages/Skills/skills';
import Certification from './Pages/Certification/certification';
import Experience from './Pages/Experience/experience';




function App() {
  return (
    <div>
      <Container>
        <Router>
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav Link to="/information">Information</Nav>
          

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      
          <Switch>
            <Route path="/skill" component={ Skill } />
            <Route path="/certification">
              <Certification />
            </Route>
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
      </Container>
    </div>
  );
}

export default App;
