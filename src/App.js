import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let person = [
    {name:'Showkat Ali', job: 'FreeLancer'},
    {name: 'Sumon Ahmed', job: 'Youtuber'},
    {name: 'Sumon Hasan', job: 'Bekar'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        <Data></Data>
        {person.map(element => <Person person={element}></Person>)}
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{width: '400px', height: '200px', backgroundColor: 'yellow', color: 'red', float: 'left', margin: '4px'}}>
      <h2>Name: {props.person.name} </h2>
      <p>Job: {props.person.job} </p>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(10);
  return (
    <div id="count">
      <h2>Count: {count}</h2>
      <button onClick={()=> setCount(count + 1)} id="increase">Add</button>
      <button onClick={()=> setCount(count - 1)} id="increase">Minus</button>
    </div>
  )
}

function Data(){
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, []);
  return (
    <div>
      {
        user.map(name => <h4>Name: {name.name}</h4>)
      }
    </div>
  )
}


export default App;
