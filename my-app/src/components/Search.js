import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }

    searchOnChange = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    onSearchClick = () => {
        this.props.onSearch(this.state.searchInput)
    }

  render() {
      
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" 
                       className="form-control" 
                       name="SearchBar" 
                       placeholder="Nhập từ khóa..." 
                       onChange = {this.searchOnChange}  
                />
                <span className="input-group-btn">
                    <button type="button" 
                            className="btn btn-primary"
                            onClick = {this.onSearchClick}
                    >
                        <i className="fa fa-search" aria-hidden="true"></i> Tìm
                    </button>
                </span>
            </div>
        </div>
    )
  }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: (text) => {
            dispatch(actions.searchTask(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);