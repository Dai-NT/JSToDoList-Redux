import { SORT_TASK } from "../constants/ActionTypes";

var initialState = {
    sortBy: 'name',
    sortValue: 1
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_TASK:
            return action.sort;
    default: return state;
    }
}

export default myReducer;