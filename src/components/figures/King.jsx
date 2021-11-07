import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Figure';
import '../../styles/Figure.css';
import Figure from './Figure';

class King extends Figure {
    label = 'K';
    type ='KING';

    setAvailableCells = () => {
        this.availableCells = [];
        this.availableCells.push({ x: this.props.x-1, y: this.props.y-1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x, y: this.props.y-1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+1, y: this.props.y-1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+1, y: this.props.y, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x+1, y: this.props.y+1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x, y: this.props.y+1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x-1, y: this.props.y+1, availabilityType: 'AVAILABLE' });
        this.availableCells.push({ x: this.props.x-1, y: this.props.y, availabilityType: 'AVAILABLE' });
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(King);