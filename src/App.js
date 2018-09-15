import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrugForm from "./FormInput/DrugForm";

class App extends Component {
  render() {
    return (
        <div style = {{margin:30}}>
        <DrugForm/>
        </div>
    )
  }
}

export default App;
