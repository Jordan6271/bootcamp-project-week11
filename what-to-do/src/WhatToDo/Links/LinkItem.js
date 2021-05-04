import React from "react";
import Nav from "react-bootstrap/Nav";

class LinkItem extends React.Component {
    render() {
        return (
            <div className="link-item-area">
                <Nav.Item>
                    <Nav.Link
                        eventKey={this.props.children}
                        onClick={this.props.onClick}
                        disabled={this.props.active}
                    >
                        {this.props.children}
                    </Nav.Link>
                </Nav.Item>
            </div>
        );
    }
}

export default LinkItem;
