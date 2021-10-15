import {TASK_EDITING} from '../constants/ActionTypes';

var initialState = {
    id: '',
    name: '',
    status: false
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK_EDITING:
            return action.task;
        default: return state;
    }
}

export default myReducer;