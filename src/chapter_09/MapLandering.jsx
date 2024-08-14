import ReactDOM from 'react-dom';

function NumberList(props) {
    const {numbers} = props;

    const listItems = numbers.map((number) => <li>{number}</li>);

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5];
const listItems = numbers.map((number, i) => 
    <li key={i}>
        {number}
    </li>
);

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
)