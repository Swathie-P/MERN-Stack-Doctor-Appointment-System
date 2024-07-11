/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import DoctorDetails from './pages/DoctorDetails';
import AdminDashboard from './components/AdminDashboard';
import DoctorDashboard from './components/DoctorDashboard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={UserDashboard} />
        <Route path="/doctor/:id" component={DoctorDetails} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/doctor-dashboard" component={DoctorDashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </div>
  );
}

export default App;
