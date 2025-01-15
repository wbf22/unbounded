import React from 'react';
import './Button.css';
import '../App.css';

const Button = (props) => {
    const { text } = props;
    return (
        <div class="button">
            <b>{ text }</b>
        </div>
    );
}

export default Button;