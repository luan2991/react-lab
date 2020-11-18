import React, { useState } from 'react';
import './Counter.scss';
// import PropTypes from 'prop-types';

// Counter.propTypes = {
    
// };


function Counter(props) {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState('Hello');
    const handlebtnDecreaseClick=()=>{
        count !== 0 ? setCount((x)=>x-1) : setCount(0);
    };
    const handlebtnIncreseClick=()=>{
        setCount((x)=>x+1);
    };
    return (
        <div className="counter">
            <p>{count}</p>
            <button onClick={handlebtnDecreaseClick}>Decrease</button>
            <button onClick={handlebtnIncreseClick}>Increase</button>
        </div>
    );
}

export default Counter;