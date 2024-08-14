import { useState } from "react"

const scaleNames = {
    c: '섭씨',
    f: '화씨'
}

function TemperatureInput(props) {
    //변경전: const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        //변경전: setTemperature(e.target.value);
        // 하위 컴포넌트의 state를 공통 상위 컴포넌트로 올림!
        props.onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해 주세요(단위:{scaleNames[props.scale]});
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput;