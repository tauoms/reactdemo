import "./App.css";
import Box from "./Box";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import View from "./View";
import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [persons, setPersons] = useState([
  //   { id: 1, name: "Jeeves", title: "CEO", location: "Tampere" },
  //   { id: 2, name: "Hannah", title: "CTO", location: "Joensuu" },
  //   { id: 3, name: "Jake", title: "UFO", location: "Rauma" },
  // ]);
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    message: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const changeFormHandler = (event) => {
    const { name, value } = event.target; // Destructured

    // open previous state, check if object has fname etc. and replace value with old + new data
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
      {isLoggedIn && <Dashboard user="Someone" />}

      {/* <Form changeFormHandler={changeFormHandler} /> */}
      {/* Pass spread formData as prop */}
      {/* <View {...formData} /> */}

      <Footer />
    </>
  );
}

export default App;
