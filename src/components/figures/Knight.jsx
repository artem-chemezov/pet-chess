import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Figure';
import '../../styles/Figure.css';
import Figure from './Figure';

class Knight extends Figure {
    label = 'Kn';
    type = 'KNIGHT';

    setAvailableCells = () => {
        this.availableCells = [];
        this.availableCells.push({ x: this.props.x-1, y: this.props.y-2, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+1, y: this.props.y-2, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x-2, y: this.props.y-1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+2, y: this.props.y-1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x-1, y: this.props.y+2, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+1, y: this.props.y+2, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x-2, y: this.props.y+1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+2, y: this.props.y+1, availabilityType: 'AVAILABLE' });
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Knight);