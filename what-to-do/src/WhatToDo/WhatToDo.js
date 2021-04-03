import React from 'react';

import Add from './Add/Add';
import Links from './Links/Links';
import VisibleItems from './Item/VisibleItems';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class WhatToDo extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        todoItems: []
    }
  }

  componentDidMount() {
    const todoItems = localStorage.getItem(`list`);
    this.setState({
      todoItems: JSON.parse(todoItems) || []
    });
  }

  render() {
    return (
      <div className="todo-area">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              What To Do?
            </Navbar.Brand>
          </Navbar>
          <Container>
            <Add />
            <Links />
            <VisibleItems items={this.state.todoItems}/>
          </Container>
      </div>
    );  
  }
}

export default WhatToDo;
