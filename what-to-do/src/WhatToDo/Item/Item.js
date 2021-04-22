import React from "react";
import Button from "react-bootstrap/Button";
import Checkbox from "react-bootstrap/FormCheck";

class Item extends React.Component {
	render() {
		return (
			<tr>
				<td>
					<span
						style={{
							color: this.props.completed
								? `rgba(0,0,0,0.5)`
								: `black`,
						}}
					>
						{this.props.id}
					</span>
				</td>
				<td>
					<span
						style={{
							color: this.props.completed
								? `rgba(0,0,0,0.5)`
								: `black`,
						}}
					>
						{this.props.description}
					</span>
				</td>
				<td>
					<Checkbox
						onClick={this.props.onCompletedClick}
						defaultChecked={this.props.completed}
					/>
				</td>
				<td>
					<Button variant="danger" onClick={this.props.onRemoveClick}>
						Remove
					</Button>
				</td>
			</tr>
		);
	}
}

export default Item;
