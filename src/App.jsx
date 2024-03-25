import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState('string');
  const [persons, setPersons] = useState([
    {id:1, name:"Jeeves", title:"CEO", location:"Tampere"},
    {id:2, name:"Hannah", title:"CTO", location:"Joensuu"},
    {id:3, name:"Jake", title:"UFO", location:"Rauma"},
  ]);

  return (
      <>
        <p>Counter: {counter}</p>
        {persons.map(person => (
        <Box 
          key={person.id}
          name={person.name} 
          title={person.title} 
          location={person.location} 
        />
        ))}
      </>
    );
}

export default App
