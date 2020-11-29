
import './App.scss';
import { useState,useEffect } from 'react';
import postApi from './api/postApi.js';
import studentsApi from './api/studentsApi.js';
import Counter from './components/Counter';
import MagicBoxFeature from './features/MagicBox';
import Button from './components/Button';
import ColorBox from './features/ColorBox';

function App() {
  const [loading, setLoading] = useState(true);
  const [studentsList, setstudentsList] = useState([]);
  const [postList, setpostList] = useState([]);
  useEffect(() => {
    (async ()=>{
      try {
       const {data}= await studentsApi.getAll({
         _page:1,
         _limit:10,
       });
       console.log(data);
       setstudentsList(data);
      } catch (error) {
        console.log('failed to fretch post list', error)
      }
      
     //  console.log(response);
     setLoading(false);
    
    })
    ()
   }, [])
  useEffect(() => {
   (async ()=>{
     try {
      const {data}= await postApi.getAll({
        _page:1,
        _limit:10,
      });
      console.log(data);
      setpostList(data);
     } catch (error) {
       console.log('failed to fretch post list', error)
     }
     
    //  console.log(response);
    setLoading(false);
   
   })
   ()
  }, [])
  return(
    <div>
     
      <ColorBox/>
      {loading && 
      <div>
        <div className="dashed-loading"></div>
        <div className="dashed-loading"></div>
        <div className="dashed-loading"></div>
      </div>
      } 
      <ul>
        {studentsList.map((student) => (
            <li key={student.id} >{student.name}</li>
        ))
        }
      </ul>
      
      <Counter/>
       <Button>Hello</Button>
       <Button  onClick={()=> alert("this is alert")}>Click to show aleart</Button>
       <MagicBoxFeature/> 
    </div>
  );
  
}

export default App;
