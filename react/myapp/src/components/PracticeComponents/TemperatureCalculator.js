import React from 'react'
import TemperatureInput from './TemperatureInput';
import { thisExpression } from '@babel/types';

function BoilingVerdict(props) {
  debugger;
  if (props.celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      tempType: 'c'
    }
  }

  onFahrenheitChange = (value) => {
    this.setState({ temperature: value, tempType: 'f' });
  }

  onCelciusChange = (value) => {
    debugger;
    this.setState({ temperature: value, tempType: 'c' });
  }

  
  

  render() {
    debugger;
    let celcius = this.state.tempType == 'f' ? tryConvert(this.state.temperature, toCelsius) : this.state.temperature;
    let fahrenheit = this.state.tempType == 'c' ? tryConvert(this.state.temperature, toFahrenheit) : this.state.temperature;
    return (
      <div>
        < TemperatureInput onTemperatureChange={this.onCelciusChange} temperature={celcius} scale='c' />
        < TemperatureInput onTemperatureChange={this.onFahrenheitChange} temperature={fahrenheit} scale='f' />
        <BoilingVerdict celcius = {celcius}/>
      </div>
    );
  }
}