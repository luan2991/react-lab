import React,{ useState } from 'react';
import './ColorBox.scss';
const COLOR_LIST =['deeppink','goldenrod','maroon','lightgreen'];
function ColorBox() {
    
    // const [color, setColor] = useState('');
    const [idx, setIdx] = useState(0);
    const handleChangeColor = ()=>{
        setIdx(x=>(x+1) % COLOR_LIST.length);
    }
    return (
        <div className="center">
                <h1> Magic Box</h1>
                <p> List of colors: deeppink - goldenrod - maroon - lightgreen</p>
                
                <div className="colorbox center-text" onClick={handleChangeColor} style={{backgroundColor:COLOR_LIST[idx]}}>
                    <p>Click Me!</p>
                </div>
        </div>
    );
}

export default ColorBox;