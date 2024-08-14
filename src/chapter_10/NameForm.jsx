import { useState } from "react";

function NameForm(props) {
    // 사용자의 입력을 직접적으로 제어할 수 있음
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // 사용자가 입력한 모든 입력값을 대문자로 바꿔줌
    // const handleChange = (event) => {
    //     setValue(event.target.value.toUpperCase());
    // }

    const handleSubmit = (event) => {
        alert('입력한 이름: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출</button>
        </form>
    )
}