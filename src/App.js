
import './App.scss';

function App() {
  const text = 'Chau Bang Luan';
  const age = 22;
  const isMale = true;
  const isNull = null;
  const studentA = {
    name: 'Luan',
    age: 22,
    address: {
      street: 'THD',
    },
  };
  const studentList = [
    {
      id: 1,
      name: 'Luan',
      age: 18,
    },
    {
      id: 2,
      name: 'Thanh',
      age: 18,
    },
  ];

  const colorList =['green','red','blue','pink'];

  const showStudent=false;
  return (
    <section className="app">
    <h2 className="color-list">Color List</h2>
    <ul className="color-list">
        {colorList.map((color)=>(
          <li style={{color}} key={color}>
          {color}
          </li>
        ))}
      </ul>
      <h1>hello world {text}</h1>
      <p>age: {age + 2}</p>
      <p>Is Male: {isMale ? 'Yes' : 'No'}</p>
      <p>Render null/undefined: {isNull != null ? 'null' : 'undefined'}</p>
      
      {showStudent &&(<div>
        <h1>Student</h1>
        <p>Name :{studentA.name}</p>
        <p>Age :{studentA.age}</p>
        <p>address :{studentA.address.street}</p>
        <h2> Student List</h2>
      </div>) }
      {!showStudent && (<p>Don&apos;t show student</p>)}
      {/* {true && <p>RENDER NE</p>}
      {false && <p>Khong render</p>}
      {null && <p>RENDER null</p>}
      {undefined && <p>RENDER under</p>}
      {!!0 && <p>RENDER 0</p>}
      {!!123 && <p>RENDER 123</p>}
      {!!'Hello' && <p>RENDER hello</p>}
      {!!'' && <p>empty</p>} */}
      
      <ul className="student-list">
        { studentList.map((student)=>(
          <li key={student.id}>
            <p>Name:{student.name}</p>
            <p>Age: {student.age}</p>
          </li>
        ))}
      </ul>
    </section>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       hello {text}
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
