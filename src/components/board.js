import React from 'react';
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i, isWinningCell) {
        return (
            <Square 
                key={i}
                isWinning={isWinningCell}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        var rows = [];
        var winningCells = this.props.winningCombination;
        for (let i = 0; i < 3; i++) {
            var squares = [];
            for (let j = 0; j < 3; j++) {
                const cellNumber = i * 3 + j;
                const isWinningCell = winningCells && winningCells.includes(cellNumber);

                squares.push(this.renderSquare(cellNumber, isWinningCell));
            }

            rows.push((<div key={'row_' + i}  className="board-row">{ squares }</div>));
        }

        return (
            <div> 
            { rows }
            </div>
        );
    }
}
