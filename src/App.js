import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout/Layout";
import Profile from "./components/Patient/Profile/Profile";

class App extends Component {
  render() {
    return (
        <div>
              <Layout>
                    <Profile/>
              </Layout>
        </div>
    )
  }
}

export default App;
