import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            InputName: '',
            InputOptions: false
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                InputName: this.props.taskEditing.name,
                InputOptions: this.props.taskEditing.status
            })
        }
    }
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                InputName: nextProps.taskEditing.name,
                InputOptions: nextProps.taskEditing.status
            })
        }else if (!nextProps.taskEditing) {
            this.setState({
                id: '',
                InputName: '',
                InputOptions: false
            })
        }
    }


    handleOnChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value; 
        if (name === 'InputOptions') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state)
        this.onClear()
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            id: '',
            InputName: '',
            InputOptions: false
        })
        this.onCloseForm();
    }
    
    render() {
        var id = this.state.id;
        if (!this.props.isDisplayForm) return null
        return(
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title" style = {{display: 'flex'}}>
                <span style={{flex: 1}}>
                    { id !== '' ? 'C???p nh???t c??ng vi???c' : 'Th??m c??ng vi???c' }
                </span> 
                <span className="fa fa-times-circle text-right"
                      onClick = {this.onCloseForm}></span>        
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>T??n:</label>
                        <input type="text" 
                            className="form-control" 
                            name="InputName" 
                            placeholder="T??n c??ng vi???c..."
                            value = {this.state.InputName}
                            onChange = {this.handleOnChange}
                            />
                    </div>
                    <label>Tr???ng th??i:</label>
                    <select name="InputOptions" 
                            className="form-control"
                            value = {this.state.InputOptions}
                            onChange = {this.handleOnChange}
                            >
                        <option value={true}>K??ch ho???t</option>
                        <option value={false}>???n</option>
                    </select>
                    <br/>
                    <div className = "text-center"> 
                        <button type="submit" className="btn btn-warning" style={{marginRight: 5}}>
                        <i className="fa fa-plus" aria-hidden="true"></i> L??u l???i</button>
                        <button type="button" 
                                className="btn btn-danger"
                                onClick = {this.onClear}>
                        <i className="fa fa-times" aria-hidden="true"></i>  H???y b???</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.toggleForm,
        taskEditing: state.taskEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch (actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);