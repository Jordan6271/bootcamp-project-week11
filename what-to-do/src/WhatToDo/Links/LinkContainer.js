import { connect } from "react-redux";
import { setVisibilityFilter } from "../Actions/Actions";
import LinkItem from "./LinkItem";

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        },
    };
}

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(LinkItem);

export default LinkContainer;
