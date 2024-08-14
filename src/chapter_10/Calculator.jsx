import React from "react";
import BollingVerdict from "./BollingVerdict"
import TemperatureInput from "./TemperatureInput"

const { useState } = require("react");

/*
function Calculator(props) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }

    return (
        <fieldset>
            <legend>섭씨 온도를 입력하세요:</legend>
            <input
                value={temperature}
                onChange={handleChange} />
            <BollingVerdict
                celsius={parseFloat(temperature)} />
        </fieldset>
    )
}
*/

// 온도 변화 함수
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Caculator(props) {
    const [temperature, setTemperature] = useState(''); // 온도값
    const [scale, setScale] = useState('c'); // 단위

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryConvert((temperature, toCelsius)) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert((temperature, toFahrenheit)) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
        </div>
    )
}