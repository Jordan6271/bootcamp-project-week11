export const ADD_ITEM = `ADD_ITEM`;
export const REMOVE_ITEM = `REMOVE_ITEM`;
export const TOGGLE_COMPLETED = `TOGGLE_COMPLETED`;
export const SET_VISIBILITY_FILTER = `SET_VISIBILITY_FILTER`;

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE",
};

export function addItem(text) {
    return {
        type: ADD_ITEM,
        text,
    };
}

export function toggleCompleted(id, completed) {
    return {
        type: TOGGLE_COMPLETED,
        id,
        completed,
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter,
    };
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id,
    };
}
