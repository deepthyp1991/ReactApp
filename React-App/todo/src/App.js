import React, { Component} from 'react';
import Todo from './Components/Todo'
import './App.css'

class App extends Component{
  state = {
    todos:[
      {
        id:1,
        title:'Takeout the trash',
        completed:false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed:false
      },
      {
        id:3,
        title:'Meeting with boss',
        completed:false
      }
    ]
  }
  render(){
    return (
      <div className='App'>
       <Todo todo={this.state.todos}/>
      </div>
    );
  }
  }
export default App;
