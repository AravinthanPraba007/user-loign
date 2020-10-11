import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

function App() {
  return (
    <Container  className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </div>
      
    </Container>
    
    
  );
}

export default App;
