import React from "react";
import Item from "./Item";
import Table from "react-bootstrap/Table";

class VisibleItems extends React.Component {
    render() {
        return (
            <div className="visible-items-area">
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th className="w-50">Item</th>
                            <th>Completed</th>
                            <th className="pl-4">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item) => (
                            <Item
                                key={item.id}
                                {...item}
                                onCompletedClick={() =>
                                    this.props.onCompletedClick(
                                        item.id,
                                        item.completed
                                    )
                                }
                                onRemoveClick={() =>
                                    this.props.onRemoveClick(item.id)
                                }
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default VisibleItems;
