import React, { Component } from 'react';
import ListControl from './ListControl';
import ListItem from './ListItem';
import { connect } from 'react-redux';

class List extends Component {

  render() {
    var { tasks, filterTask, searchTask, sort } = this.props; 
    if (filterTask.name) {
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().includes(filterTask.name.toLowerCase());
        })
    }
    if (filterTask.status) {
        tasks = tasks.filter((task) => {
            if (filterTask.status === 'all') {
                return task;
            }
            else {
                return task.status === (filterTask.status === 'active' ? true : false);
            }
        })
    }
    if (searchTask) {
        tasks = this.props.tasks.filter((task) => {
            return task.name.toLowerCase().includes(searchTask.toLowerCase());
        })
    }
    if (sort.sortBy === 'name') {
        tasks.sort((a,b) =>{
            if (a.name > b.name) return sort.sortValue;
            else if (a.name < b.name) return -sort.sortValue;
            else return 0;
        });
    }else{
        tasks.sort((a,b) =>{
            if (a.status > b.status) return -sort.sortValue;
            else if (a.status < b.status) return sort.sortValue;
            else return 0;
        });  
    }
    var elementTasks = tasks.map((task,index) =>{
        return <ListItem key = {task.id} 
                        index = { index } 
                        name = { task.name } 
                        status = { task.status }
                        taskId = { task.id }
                        task = { task }
                        />
    })
    return (
        <table className="table table-bordered table-hover">
            <thead> 
                <tr>
                <th className = 'text-center'>STT</th>
                <th className = 'text-center'>Tên</th>
                <th className = 'text-center'>Trạng thái</th>
                <th className = 'text-center'>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <ListControl/>
                { elementTasks }
            </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        filterTask: state.filterTask,
        searchTask: state.search,
        sort: state.sortTask,
    }
};

export default connect(mapStateToProps, null) (List);