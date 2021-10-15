import { LIST_ALL, SAVE_TASK, UPDATE_STATUS, DELETE_TASK } from '../constants/ActionTypes';

var s4 = () => {
    return Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);
}

var GenerateID = () => {
    return s4() + '-' + s4() + '-' + 
    s4() + '-' + s4() + '-' + s4() + 
    s4() + '-' + s4() + '-' + s4() + s4() +  '-' + s4();
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL:
            return state;
        case SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.InputName,
                status: action.task.InputOptions,
            };
            if (!task.id) {
                task.id = GenerateID()
                state.push(task);
            }else {
                var taskEditing = state.find(taskEditing => taskEditing.id === task.id)
                state[state.indexOf(taskEditing)] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case UPDATE_STATUS:
            var taskIsUpdate = state.find(task => task.id === action.id);
            taskIsUpdate.status = !taskIsUpdate.status;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case DELETE_TASK:
            var taskIsDelete = state.find(task => task.id === action.id);
            state.splice(state.indexOf(taskIsDelete), 1)
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default myReducer;