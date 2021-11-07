import { connect } from 'react-redux';
import '../../styles/Figure.css';
import Figure from './Figure';
import { mapStateToProps, mapDispatchToProps } from './Figure';
import { MAX_CELLS_IN_ROW } from '../../utils/constants';

class Pawn extends Figure {
    label = 'P';
    type = 'PAWN';

    setAvailableCells = () => {
        this.availableCells = [];
        if (this.props.isWhite) {
            this.availableCells.push({ x: this.props.x, y: this.props.y+1, availabilityType: 'AVAILABLE' });
            if (this.props.y === 1) 
                this.availableCells.push({ x: this.props.x, y: this.props.y+2, availabilityType: 'AVAILABLE' });
        } else {
            this.availableCells.push({ x: this.props.x, y: this.props.y-1, availabilityType: 'AVAILABLE' });
            if (this.props.y === MAX_CELLS_IN_ROW - 2)
                this.availableCells.push({ x: this.props.x, y: this.props.y-2, availabilityType: 'AVAILABLE' });
        }

        if (this.props.isWhite) {
            this.availableCells.push({ x: this.props.x+1, y: this.props.y+1, availabilityType: 'KILL' });
            this.availableCells.push({ x: this.props.x-1, y: this.props.y+1, availabilityType: 'KILL' });
        } else {
            this.availableCells.push({ x: this.props.x+1, y: this.props.y-1, availabilityType: 'KILL' });
            this.availableCells.push({ x: this.props.x-1, y: this.props.y-1, availabilityType: 'KILL' });
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pawn);