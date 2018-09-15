import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrugForm from "./FormInput/DrugForm";
import Sidebar from "./Navigation/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
        <div style = {{margin:30}}>
              <Sidebar/>
        </div>
    )
  }
}

export default App;
