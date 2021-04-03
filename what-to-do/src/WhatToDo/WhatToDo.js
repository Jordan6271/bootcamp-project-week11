import React from 'react';
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

  render() {
    return (
      <div className="todo-area">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
              What To Do?
            </Navbar.Brand>
          </Navbar>
          <Container>
            Add Item <br />
            Links <br />
            Visible Items
          </Container>
      </div>
    );  
  }
}

export default WhatToDo;
