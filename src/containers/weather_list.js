import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather (cityData) {
        const name = cityData.city.name;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        )
    }

    render () {
        return (
            <table className='table table-hover'> 
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }
}

// function mapStateToProps(state) {
//     return { weather: state.weather };
// }


// will place weather prop on WeatherList component
function mapStateToProps ({ weather }) {
    return { weather };
}

// convert component to container
export default connect(mapStateToProps)(WeatherList);