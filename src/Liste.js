import React from 'react';

function Liste(props){
    const numbers = props.numbers;
    const listItem = numbers.map((numbers) =>
    <li key={numbers.toString()}>{numbers}</li>
    );
    return (
        <ul>{listItem}</ul>
    );
}

export default Liste;