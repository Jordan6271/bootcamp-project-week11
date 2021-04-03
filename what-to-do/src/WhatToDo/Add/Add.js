import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      description: ``,
      completed: false
    }
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    let newId = this.state.id + 1;
    this.props.onsubmit(this.state.id, this.state.description, this.state.completed);
    this.setState({
      id: newId,
      description: ``,
      completed: false
    });
  }

  render() {
    return (
      <div className="add-area">
        <Card>
          <Card.Body>
            <Form onSubmit={(event) => this.submitHandler(event)}>
              <input type="text" name="description" value={this.state.description} onChange={(event) => this.handleChange(event)} />
              <Button type="submit">Add Item</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Add;