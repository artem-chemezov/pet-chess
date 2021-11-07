import { connect, useSelector } from 'react-redux';
import React from "react";
import { setAvilableForMove } from '../../slices/boardSlice';
import { setActiveFigure } from '../../slices/figureSlice';


export const mapStateToProps = state => ({
    activeFigure: state.activeFigure.figure,
});

export const mapDispatchToProps = dispatch => ({
    setAvilableForMove: pos => dispatch(setAvilableForMove(pos)),
    setActiveFigure: pos => dispatch(setActiveFigure(pos)),
})

class Figure extends React.Component {    
    onClick = () => {
        const activeFigure = { x: this.props.x, y: this.props.y, type: this.type, isWhite: this.props.isWhite };
        this.props.setActiveFigure(activeFigure);
        this.setAvailableCells();
        this.props.setAvilableForMove({ cells: this.availableCells, activeFigure: activeFigure});
    }

    render() {
        return (
            <div className='figureWrapper'>
                <button onClick={this.onClick} className={'figure ' + (this.props.isWhite ? 'isWhiteFigure' : '')}>{this.label}</button>
            </div>
        ) 
    }
}

export default Figure;
