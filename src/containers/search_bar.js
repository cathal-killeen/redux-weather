import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor (props) {
        super(props);


        this.state = { searchTerm: '' };
    }

    onInputChange (event) {
        this.setState( { searchTerm: event.target.value } );
    }

    onFormSubmit (event) {
        event.preventDefault();

        // fetch weather data
        this.props.fetchWeather(this.state.searchTerm);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input 
                    placeholder="Get a 5 day forecast for ur fav cities"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange.bind(this)}
                    type="text" />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}


function mapDispatchToProps (dispatch) {
    // bindActionCreators()
    return bindActionCreators({ fetchWeather }, dispatch);
}

// connect(mapStateToProps, mapDispatchToProps)(ContainerName);
export default connect(null, mapDispatchToProps)(SearchBar);