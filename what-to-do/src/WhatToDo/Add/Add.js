import React from "react";
import { connect } from "react-redux";
import { addItem } from "../Actions/Actions";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Add extends React.Component {
	render() {
		let input;
		return (
			<div className="add-area">
				<Card style={{ border: "none" }}>
					<Card.Body>
						<Form
							onSubmit={(event) => {
								event.preventDefault();
								if (!input.value.trim()) {
									return;
								}
								this.props.dispatch(addItem(input.value));
								input.value = ``;
							}}
						>
							<input
								id="input"
								ref={(node) => {
									input = node;
								}}
								className="mr-3 mt-1 pl-2 w-25"
								placeholder="Add an item to your list..."
							/>
							<Button
								type="submit"
								style={{ marginTop: "-0.25rem" }}
							>
								Add Item{" "}
							</Button>
						</Form>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default connect()(Add);
