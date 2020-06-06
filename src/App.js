import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name:'Akshay', age: 26},
      {name:'Valentina', age: 18}
    ]
  }

  changeNameHandler=(name)=>{
    //console.log("clicked");
    this.setState({persons: [
      {name:name, age: 26},
      {name:'Valentina', age: 18}
    ]})
  }

  switchNameHandler=(event)=>{
    this.setState({persons: [
      {name:'Akshay Popli', age: 26},
      {name:event.target.value, age: 18}
    ]})
  }

  render() {
    const style={
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid maroon',
      padding: '4px',
      color: 'white'
    }
    return (
      <div className="App">
        <h1>I am react app</h1>
        <button 
        style={style}
        onClick = {()=>this.changeNameHandler('Akshay Popli')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person 
          click={this.changeNameHandler.bind(this, 'Akshay')} 
          changed={this.switchNameHandler}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>
            My hobbies: cooking
        </Person>
        <Person name="x" age="12"></Person>
        <Person name="y" age="13"></Person>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'test'));
  }
}

export default App;
