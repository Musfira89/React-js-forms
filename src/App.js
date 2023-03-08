import React, { useState } from "react";
import './App.css';
import StudentLogin from './components/pages/StudentLogin';
import Register from './components/pages/Register';
import { BrowserRouter, Route, Switch } from "react-router-dom";




function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <StudentLogin onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>

    
  );
}

export default App;