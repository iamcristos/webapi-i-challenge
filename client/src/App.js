import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './component/navigation/NavBar';
import './App.css';
import Users from './container/User';
import AddUser from './container/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <ToastContainer />
        <Route exact path="/" component={Users} />
        <Route exact path="/add-user" component={AddUser} />
      </Router>
    </div>
  );
}

export default App;
