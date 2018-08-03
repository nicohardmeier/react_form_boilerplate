import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Form/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>HEY</Header>  
        <Form></Form>  
        <Footer></Footer>  
      </div>
    );
  }
}

export default App;
