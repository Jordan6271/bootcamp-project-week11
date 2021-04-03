import React from 'react';
import Button from 'react-bootstrap/Button';

class Item extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.id}
        </td>
        <td>
          <span onclick={this.props.onclick}>
            {this.props.description}
          </span>
        </td>
        <td>
          <Button variant="danger" onclick={this.props.removeClick}>Remove</Button>
        </td>
      </tr>
    );
  }
}

export default Item;