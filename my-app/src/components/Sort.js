import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'name',
            sortValue: 1
        }
    }

    onSort = (sortBy, sortValue) => {
        this.props.onSort({
            sortBy, 
            sortValue
        });
    }

  render() {
      var { sort } = this.props;
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    id="menu1" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="true">
                    Sắp xếp
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="menu1">
                    <li onClick= {() => this.onSort('name', 1)}>
                        <div role="button" 
                            className = { (sort.sortBy === 'name' && sort.sortValue === 1) ? 
                            "sort sort_selected" : "sort"}
                        >
                        <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i> Tên A-Z</div>
                    </li>
                    <li onClick= {() => this.onSort('name', -1)}>
                        <div role="button" 
                             className = { (sort.sortBy === 'name' && sort.sortValue === -1) ? 
                            "sort sort_selected" : "sort"}
                        >
                        <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i> Tên Z-A</div>
                    </li>
                    <li className="divider"></li>
                    <li onClick= {() => this.onSort('status', 1)}>
                        <div role="button" 
                             className = { (sort.sortBy === 'status' && sort.sortValue === 1) ? 
                             "sort sort_selected" : "sort"}>
                             Trạng thái kích hoạt
                        </div>
                    </li>
                    <li onClick= {() => this.onSort('status', -1)}>
                        <div role="button" 
                             className = { (sort.sortBy === 'status' && sort.sortValue === -1) ? 
                             "sort sort_selected" : "sort"}>
                             Trạng thái ẩn
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        sort: state.sortTask,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);