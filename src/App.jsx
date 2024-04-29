import "./App.css";
import Box from "./components/Box";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import View from "./components/View";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Root from "./Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

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

  const displayHandler = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle between true & false
  };

  const router = createBrowserRouter([
    { path: "/", element: <Root /> },
    { path: "/about", element: <About /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
