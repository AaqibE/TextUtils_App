import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter as  Router, Route, Routes, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enable", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable", "Success");
    }
  };

  return (
    <>
     <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<TextForm heading="Enter the text to anaylize"showAlert={showAlert}mode={mode}/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
