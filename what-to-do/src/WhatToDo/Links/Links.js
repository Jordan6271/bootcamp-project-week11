import React from "react";
import LinkContainer from "./LinkContainer";
import { VisibilityFilters } from "../Actions/Actions";
import Nav from "react-bootstrap/Nav";

class Links extends React.Component {
    render() {
        return (
            <div className="links-area">
                <Nav variant="tabs" defaultActiveKey="All">
                    <LinkContainer filter={VisibilityFilters.SHOW_ALL}>
                        All
                    </LinkContainer>
                    <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
                        To Be Completed
                    </LinkContainer>
                    <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
                        Completed
                    </LinkContainer>
                </Nav>
            </div>
        );
    }
}

export default Links;
