import { FILTER_TABLE } from '../constants/ActionTypes';

var initialState = {
    name: '',
    status: 'all'
}

var myReducer = (state=initialState, action) => {
    switch (action.type) {
        case FILTER_TABLE:
            return action.filter;
    default: return state;
    }
};

export default myReducer;