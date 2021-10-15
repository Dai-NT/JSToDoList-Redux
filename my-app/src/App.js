import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import List from './components/List';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions/index'

class App extends Component {
    
    handleAddTaskClick = () => {
        var { taskEditing } = this.props;
        if (taskEditing && taskEditing.id !== ''){
            this.props.onOpenForm()
            this.props.onClearTask({
                id: '',
                name: '',
                status: false
            })
        }else {
            this.props.onTogleForm()

        }
    }

  render() {

    var { isDisplayForm } = this.props;

    return (
        <div className="container">
            <div className = "text-center">
                <h1>Quản lý công việc</h1>
            </div>
            <hr/>
            <div className="row">
                <TaskForm/>
                <div className= {isDisplayForm ? 
                                        "col-xs-8 col-sm-8 col-md-8 col-lg-8" : 
                                        "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick = {this.handleAddTaskClick}>
                                <i className="fa fa-plus" aria-hidden="true"></i> Thêm công việc
                            </button> 
                        </div>
                    </div>
                    <br/>
                    <Control/>
                    <br/>
                    <List/>
                </div>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.toggleForm,
        isOpenForm: state.onOpenForm,
        taskEditing: state.taskEditing,
        filter: state.filterTask,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onTogleForm: () => {
            dispatch(actions.toggleForm())
        },
        onClearTask: (task) => {
            dispatch(actions.taskEditing(task))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);