import React from 'react';

export default class MovesHistory extends React.Component {
    
    render() {
        const moves = this.props.history.map((step, move) => {
            let desc = move ? 
                'Go to move #' + move + `(${step.checkedElement % 3}, ${step.checkedElement / 3 >> 0})` :
                'Go to game start';

            if (move === this.props.currentMove){
                desc = (<strong>{desc}</strong>);
            }

            return (
                <li key={move}>
                    <button onClick={() => this.props.onClick(move)}>{desc}</button>
                </li>
            );
        });

        return moves;
    }
}