import React from 'react';
import Nav from 'react-bootstrap/Nav';

class LinkItem extends React.Component {
  render() {
    return (
      <div className="link-item-area">
        <Nav.Item>
          <Nav.Link eventKey={this.props.filter} onclick={() => this.props.onclick(this.props.filter)} disabled={this.props.active}>
            {this.props.filter}
          </Nav.Link>
        </Nav.Item>
      </div>
    );
  }
}

export default LinkItem;