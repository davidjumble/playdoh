import React, { Component } from 'react';
import Graph from './components/Graph'
import './App.css';

class App extends Component {

  state = {
    latitude: 1,
    longitude: 1
  }

  render() {
    return (
      <div>
        <Graph latitude = {this.state.latitude} longitude = {this.state.longitude}/>
        <input></input>
        </div>
    );
  }
}

export default App;
