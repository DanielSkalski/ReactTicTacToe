import React from 'react';

export default function Square(props) {
    return (
        <button key={props.value} className={`square ${props.isWinning ? 'winning' : ''}`} onClick={props.onClick}>
          {props.isWinning ? (<strong>{props.value}</strong>) : props.value}
        </button>
    );
}