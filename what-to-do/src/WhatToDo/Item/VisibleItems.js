import React from 'react';
import Item from './Item';
import Table from 'react-bootstrap/Table';

class VisibleItems extends React.Component {
  render() {
    return (
      <div className="visible-items-area">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <Item key={item.id} {...item} onClick={() => this.props.onItemClick(item.id)} removeClick={() => this.props.removeClick(item.id)} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default VisibleItems;