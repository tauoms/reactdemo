import "./App.css";
import Box from "./Box";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Form from "./Form";
import View from "./View";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Jeeves", title: "CEO", location: "Tampere" },
    { id: 2, name: "Hannah", title: "CTO", location: "Joensuu" },
    { id: 3, name: "Jake", title: "UFO", location: "Rauma" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    message: "",
  });

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const changeFormHandler = (event) => {
    const { name, value } = event.target; // Destructured

    // open previous state, check if object has fname etc. and replace value
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    console.log(formData);
  };

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
      <Form changeFormHandler={changeFormHandler} />
      <View {...formData} />

      {/* <Counter
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
      </div> */}
      <Footer />
    </>
  );
}

export default App;
