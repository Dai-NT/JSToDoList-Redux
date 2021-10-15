import * as types from '../constants/ActionTypes';

export const listAll = () => ({ type: types.LIST_ALL });    
export const saveTask = (task) => ({ 
    type: types.SAVE_TASK, 
    task // task: task
}); 
export const toggleForm = () => ({ type: types.TOGGLE_FORM }); 
export const closeForm = () => ({ type: types.CLOSE_FORM });
export const openForm = () => ({ type: types.OPEN_FORM});
export const updateStatus = (id) => ({ 
    type: types.UPDATE_STATUS,
    id    // id : id
});
export const deleteTask = (id) => ({ 
    type: types.DELETE_TASK,
    id    // id : id
})
export const updateTask = (id) => ({ 
    type: types.UPDATE_TASK,
    id
})
export const taskEditing = (task) => ({ 
    type: types.TASK_EDITING,
    task 
});
export const searchTask = (text) => ({ 
    type: types.SEARCH_TASK,
    text
})
export const filterTask = (filter) => ({ 
    type: types.FILTER_TABLE,
    filter
})
export const sortTask = (sort) => ({ 
    type: types.SORT_TASK,
    sort
})