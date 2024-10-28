import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  const [isLogged, setIsLogged] = useState(true)

  return (
    isLogged 
    ? <Register />
    : <Login/>
  );
}

export default App;
