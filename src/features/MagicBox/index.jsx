

import BoxList from './components/BoxList';
import {useState} from 'react';
const FAKE_DATA=[{
    color: 'violet',
    luckyNumber:1,
    size: 'small',
},
{
    color: 'pink',
    luckyNumber:2,
    size: 'medium',
},
{
    color: 'red',
    luckyNumber:3,
    size: 'large',
},
{
    color: 'pink',
    luckyNumber:4,
},
{
    color: 'yellow',
    luckyNumber:5,
},
];
function MagicBoxFeature() {
   
   
    const [boxList, setBoxList] = useState(FAKE_DATA)
    const hanldeRemoveBoxList =(box, idx)=>{
        //remove box from list
        console.log(box,idx)
        const newBoxList=[...boxList];
        newBoxList.splice(idx,1);
        setBoxList(newBoxList);
    };
return  (
        <div> 
            <h2>MagicBox Feature</h2>
            <BoxList boxList={boxList} onBoxClick={hanldeRemoveBoxList} />
        </div>

    );

}

export default MagicBoxFeature;