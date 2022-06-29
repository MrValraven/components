import React from "react";
import "./App.css";
import Button1 from "./components/buttons/button1/Button1";
import Button2 from "./components/buttons/button2/Button2";
import Button3 from "./components/buttons/button3/Button3";
import Form1 from "./components/forms/form-1/Form1";

const App = () => {
  return (
    <div className="App">
      <h1>Components</h1>
      <Button1 />
      <Button2 />
      <Button3 />
      <Form1 />
    </div>
  );
};

export default App;
