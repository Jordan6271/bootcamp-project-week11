import { connect } from "react-redux";
import { toggleCompleted } from "../Actions/Actions";
import { removeItem } from "../Actions/Actions";
import VisibleItems from "./VisibleItems";

function getVisibleItems(items, filter) {
    switch (filter) {
        case `SHOW_COMPLETED`:
            return items.filter((item) => item.completed);
        case `SHOW_ACTIVE`:
            return items.filter((item) => !item.completed);
        case `SHOW_ALL`:
        default:
            return items;
    }
}

function mapStateToProps(state) {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCompletedClick: (id) => {
            dispatch(toggleCompleted(id));
        },
        onRemoveClick: (id) => {
            dispatch(removeItem(id));
        },
    };
}

const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleItems);

export default VisibleItemList;
