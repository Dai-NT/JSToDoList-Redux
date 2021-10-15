import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class ListControl extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      filterName: '',
      filterStatus: 'all'
    }
  }

  InTableChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilterTask(filter);
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
        <tr>
            <td></td>
            <td>
                <input type="text" 
                       name="filterName" 
                       className="form-control"
                       onChange = {this.InTableChange}
                />
            </td>
            <td>
                <select name="filterStatus" 
                        id="input" 
                        className="form-control" 
                        required="required"
                        onChange = {this.InTableChange}
                >
                <option value="all">Tất cả</option>
                <option value="active">Kích hoạt</option>
                <option value="deactive">Ẩn</option>
                </select>
            </td>
            <td></td>
        </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTask: (filter) => {
      dispatch(actions.filterTask(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListControl);