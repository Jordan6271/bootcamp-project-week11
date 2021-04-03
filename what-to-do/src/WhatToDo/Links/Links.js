import React from 'react';
import LinkItem from './LinkItem';
import Nav from 'react-bootstrap/Nav';

class Links extends React.Component {
  render() {
    return (
      <div className="links-area">
        <Nav variant="tabs" defaultActiveKey="All">
          <LinkItem onclick={(filter) => this.props.onclick(filter)} filter="All">All</LinkItem>
          <LinkItem onclick={(filter) => this.props.onclick(filter)} filter="To Be Completed">To Be Completed</LinkItem>
          <LinkItem onclick={(filter) => this.props.onclick(filter)} filter="Completed">Completed</LinkItem>
        </Nav>
      </div>
    );
  }
}

export default Links;