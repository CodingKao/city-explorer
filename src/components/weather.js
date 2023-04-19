import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
                <h2> On {this.props.dateData} it will be {this.props.weatherData}.</h2>
            </>
        )
    }
}

export default Weather;