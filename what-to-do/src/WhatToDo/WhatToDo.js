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

  onRemove(itemId) {
    const newState = this.state.todoItems.filter((_, id) => id !== itemId);
    this.setState({
      todoItems: newState
    }, () => localStorage.setItem(`list`, JSON.stringify(this.state.todoItems)));
  }

  onItemClick(id) {
    const newState = this.state.todoItems.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({
      newState
    }, () => localStorage.setItem(`list`, JSON.stringify(this.state.todoItems)));
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

  updateToDoItems(id, description, completed) {
    const todo = { id, description, completed };
    this.setState((state) => ({
      todoItems: state.todoItems.concat(todo),
      nextId: id
    }), () => localStorage.setItem(`list`, JSON.stringify(this.state.todoItems)));
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
            <Add onsubmit={(id, description, completed) => this.updateToDoItems(id, description, completed)} />
            <Links onclick={(filter) => this.clickLinks(filter)} />
            <VisibleItems items={this.state.todoItems} onItemClick={(id) => this.onItemClick(id)} removeClick={(id) => this.onRemove(id)} />
          </Container>
      </div>
    );  
  }
}

export default WhatToDo;
