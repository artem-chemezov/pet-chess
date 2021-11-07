import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Figure';
import '../../styles/Figure.css';
import { MAX_CELLS_IN_ROW } from '../../utils/constants';
import Figure from './Figure';

class Rook extends Figure {
    label = 'R';
    type ='ROOK';

    setAvailableCells = () => {
        this.availableCells = [];
        for (let i = 0; i < MAX_CELLS_IN_ROW; i++) {
            this.availableCells.push({ x: i, y: this.props.y, availabilityType: 'AVAILABLE' });
            this.availableCells.push({ x: this.props.x, y: i, availabilityType: 'AVAILABLE' });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rook);