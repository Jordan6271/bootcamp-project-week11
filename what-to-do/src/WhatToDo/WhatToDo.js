import React from 'react';

import Add from './Add/Add';
import Links from './Links/Links';
import VisibleItemList from './Item/VisibleItemList';

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

  clickLinks(filter) {
    const todoItems = JSON.parse(localStorage.getItem(`list`));
    let newState = [];
    switch (filter) {
      case "Completed":
        newState = todoItems.filter((item) => item.completed === true);
        this.setState({
          todoItems: newState
        });
        break;
      case "To Be Completed":
        newState = todoItems.filter((item) => item.completed === false);
        this.setState({
          todoItems: newState
        });
        break;
      default:
        this.setState({
          todoItems
        });
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
            <Links onclick={(filter) => this.clickLinks(filter)} />
            <VisibleItemList />
          </Container>
      </div>
    );  
  }
}

export default WhatToDo;
