import React, { Component } from 'react';
import './App.css';
import ResourceComponent from './ResourceComponent';
import SoundContainer from './Containers/SoundContainer';
import Categories from './Categories/Categories';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ResourceComponent imageCategory={2} textCategory={1} exhibition={2}></ResourceComponent>
          <SoundContainer category={1} exhibition={2}/>
      </div>
    );
  }
}

export default App;
