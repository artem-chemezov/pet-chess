import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Figure';
import { MAX_CELLS_IN_ROW } from '../../utils/constants';
import '../../styles/Figure.css';
import Figure from './Figure';

class Qween extends Figure {
    label = 'Q';
    type = 'QWEEN';

    setAvailableCells = () => {
        this.availableCells = [];
        for (let i = 0; i < MAX_CELLS_IN_ROW; i++) {
            this.availableCells.push({ x: i + (this.props.x - this.props.y), y: i, availabilityType: 'AVAILABLE' });
            this.availableCells.push({ x: i + (this.props.x + this.props.y) - MAX_CELLS_IN_ROW, y: MAX_CELLS_IN_ROW - i, availabilityType: 'AVAILABLE' });
            this.availableCells.push({ x: i, y: this.props.y, availabilityType: 'AVAILABLE' });
            this.availableCells.push({ x: this.props.x, y: i, availabilityType: 'AVAILABLE' });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Qween);