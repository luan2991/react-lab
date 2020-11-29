import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
};
Button.defaultProps= {
    onClick: null,
    children: null
}
function Button(props) {
    const {onClick,children}=props;
    return (
        <button className="button" onClick={onClick}>{children}</button>
    );
}

export default Button;