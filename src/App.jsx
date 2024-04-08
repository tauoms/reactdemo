import "./App.css";
import Box from "./Box";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Jeeves", title: "CEO", location: "Tampere" },
    { id: 2, name: "Hannah", title: "CTO", location: "Joensuu" },
    { id: 3, name: "Jake", title: "UFO", location: "Rauma" },
  ]);

  function clickIncrease() {
    setCounter(counter + 1);
  }
  function clickDecrease() {
    setCounter(counter - 1);
  }
  function clickResetCounter() {
    setCounter(0);
  }

  return (
    <>
      <Header />
      <Counter
        counterProp={counter}
        clickIncrease={clickIncrease}
        clickDecrease={clickDecrease}
        clickResetCounter={clickResetCounter}
      />
      <div className="boxContainer">
        {persons.map((person) => (
          <Box
            key={person.id}
            name={person.name}
            title={person.title}
            location={person.location}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
