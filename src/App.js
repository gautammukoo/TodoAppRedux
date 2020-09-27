import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sort : false
    }
    this.setSort = this.setSort.bind(this)
  }

  setSort() {
    this.setState({sort:!this.state.sort})
  }

  render() {
    return (
      <div className="App">
      <p className="TaskName">Tasks</p>
      <TodoInput setSort={this.setSort}/>
      <TodoList sort={this.state.sort}/>
      </div>
    );
  }
}

export default App;
