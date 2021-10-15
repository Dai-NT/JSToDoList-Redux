import { TOGGLE_FORM, CLOSE_FORM, OPEN_FORM } from "../constants/ActionTypes";

var initialState = false;       //close form

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return  state = !state; 
        case CLOSE_FORM:
            state = false;
            return state;
        case OPEN_FORM: 
            state = true;
            return state;
        default: return state
    }
}

export default myReducer;