import React from "react";

import Add from "./Add/Add";
import Links from "./Links/Links";
import VisibleItemList from "./Item/VisibleItemList";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

class WhatToDo extends React.Component {
    render() {
        return (
            <div className="todo-area">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>What To Do?</Navbar.Brand>
                </Navbar>
                <Container>
                    <Add />
                    <Links />
                    <VisibleItemList />
                </Container>
            </div>
        );
    }
}

export default WhatToDo;
