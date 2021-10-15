import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class ListItem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status,
        }
    }

    ToggleStatus = (id) => {
        this.props.onUpdateStatus(this.props.taskId)
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.taskId)
    }

    onUpdate = (id) => {
        this.props.onOpenForm()
        this.props.onTaskEditing(this.props.task)
    }

    render() {

        var { index, name, status } = this.props;  // var index = this.props.index;
    return (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ name }</td>
            <td className = "text-center">
                <button type="button"
                        onClick = {this.ToggleStatus}
                        className= { status ? "btn btn-xs btn-success" : "btn btn-xs btn-danger"}>
                        { status ? 'Kích hoạt' : 'Ẩn'}
                </button>
            </td>
            <td>
                <div className="text-center">
                    <button type="button" 
                            className="btn btn-warning"
                            onClick = {this.onUpdate}
                            style={{marginRight: 5}}>
                        <i className="fa fa-pencil" aria-hidden="true"></i> Sửa
                    </button>
                    <button type="button" 
                            className="btn btn-danger"
                            onClick = {this.onDelete}>
                        <i className="fa fa-trash" aria-hidden="true"></i> Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.toggleForm,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id))
        },
        onOpenForm: () => {
            dispatch(actions.openForm())
        },
        onTaskEditing: (task) => {
            dispatch(actions.taskEditing(task))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);