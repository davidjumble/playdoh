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
        <input id ="latitude" placeholder ="this" value = {this.state.latitude} onChange ={this.inputHandler}/>
        <div>+</div>
        <input id ="longitude" placeholder ="this" value = {this.state.longitude} onChange ={this.inputHandler}/>

        </div>
    );
  }
}

export default App;
