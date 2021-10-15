import { combineReducers } from "redux";
import tasks from "./tasks";
import toggleForm  from "./toggleForm";
import taskEditing from "./taskEditing";
import search from "./search";
import filterTask  from "./filterTask";
import sortTask from "./sortTask";

const myReducer = combineReducers ({
    tasks,
    toggleForm,
    taskEditing,
    search,
    filterTask, 
    sortTask
});

export default myReducer;