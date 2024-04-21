import "./App.css";
import Navbar from "./componenets/Navbar";
import Textform from "./componenets/Textform";
import React, { useState } from "react";
import Alert from "./componenets/Alert";



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
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text here- Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "text here- Light Mode";
    }
  };
  return (
    <>
   
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container" mode={mode}>
          
            <Textform
              showAlert={showAlert}
              heading="Enter the text to analyze below"
            />
       
        </div>
      
    </>
  );
}

export default App;
