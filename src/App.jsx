import React from "react";
import "./App.css";
import Button1 from "./components/buttons/button1/Button1";
import Button2 from "./components/buttons/button2/Button2";
import Button3 from "./components/buttons/button3/Button3";
import Button4 from "./components/buttons/button4/Button4";
import Button5 from "./components/buttons/button5/Button5";
import Button6 from "./components/buttons/button6/Button6";
import Card1 from "./components/cards/card1/Card1";
import Card2 from "./components/cards/card2/Card2";
import Form1 from "./components/forms/form-1/Form1";

const App = () => {
  return (
    <div className="app">
      <div>
        <h2>Buttons</h2>
        <div className="buttons">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
          <Button6 />
        </div>
      </div>
      <div>
        <h2>Cards</h2>
        <div className="cards">
          <div className="cardContainer">
            <Card1 />
            <Card1 />
          </div>
          <div className="cardContainer">
            <Card2 />
            <Card2 />
          </div>
        </div>
      </div>
      <Form1 />
    </div>
  );
};

export default App;
