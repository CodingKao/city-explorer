import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    // eslint-disable-next-line react/require-render-return
    render() {
        console.log(this.props)
        // let forecastElements;
        // if (this.props.forecast) {
        //     forecastElements = this.props.forecasts.map((forecast) => {

                return (
                    <WeatherDay forecast={this.props.forecasts} />
                )
                };
        // }
    }

export default Weather;