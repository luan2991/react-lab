import PropTypes from 'prop-types';
import './Box.scss';

const sizeMap = {
  small: '100px',
  medium: '110px',
  large: '120px',
};

function Box( {box, onClick} ) {
  const { color ='black', luckyNumber, size ='medium' } = box;
  const height = sizeMap[size];
  const width = sizeMap[size];
  const hanldeRemoveClick =()=>{
    if(onClick) onClick(box);
  }
  return (
    <div className="color-box " style={{ backgroundColor: color, height, width }}>
      {luckyNumber}
      <button onClick={hanldeRemoveClick}>Remove</button>
    </div>
  );
}

Box.propTypes = {
  box: PropTypes.object,
  onClick: PropTypes.func,
};

Box.defaultProps = {
  box: {},
  onClick:null,
};
export default Box;
