import { SEARCH_TASK } from "../constants/ActionTypes";

var initialState = '';

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_TASK:
            return action.text;
        default: return state;
    }
}

export default myReducer;