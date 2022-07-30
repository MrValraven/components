import React from "react";
import "./App.scss";
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
      <div className="typography">
        <h2 className="title">Typography</h2>
        <h1 className="h1element">
          This is an H1 Element, it should have 42px+
        </h1>
        <h2 className="h2element">
          This is an H2 Element, it should have 38px+
        </h2>
        <h3 className="h3element">
          This is an H3 Element, it should have 25px+
        </h3>
        <p>Body text should have +/- 18px</p>
        <p>Inputs should have +/- 18px at least</p>
        <p className="secondaryText">NavLinks text should have +/- 16px</p>
        <p className="secondaryText">
          Secondary text (captions, labels, etc) should have +/- 16px{" "}
        </p>
        <p className="secondaryText lines">
          <span>Maximum line length</span> should be around{" "}
          <span>65 to 75 characters</span>
          or +/- <span>535px</span>, if a line is too long the reader will have
          a hard time figuring out the start and the end
        </p>
        <h3 className="mobile">Mobile Responsiveness</h3>
        <p>Subtract 2px from all the above</p>
      </div>
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
        <h3 className="subtitleButton">The UI of Buttons</h3>
        <div className="buttonsRadius">
          <Button2
            buttonText="Serious, Clean | 0px"
            style={{ borderRadius: "0px", fontSize: "10px" }}
          />
          <Button2
            buttonText="Serious, Friendly | 5px"
            style={{ borderRadius: "5px", fontSize: "10px" }}
          />
          <Button2
            buttonText="Modern, Trendy | 15px"
            style={{ borderRadius: "15px", fontSize: "10px" }}
          />
          <Button2
            buttonText="Friendly, Warm | 50px"
            style={{ borderRadius: "50px", fontSize: "10px" }}
          />
        </div>
        <h3 className="subtitleButton">Button states</h3>
        <div className="buttonsRadius">
          <Button2
            buttonText="Default state"
            style={{
              borderRadius: "5px",
              fontSize: "10px",
              backgroundColor: "#069df2",
            }}
          />
          <Button2
            buttonText="Hover state"
            style={{
              borderRadius: "5px",
              fontSize: "10px",
              backgroundColor: "#027dc1",
            }}
          />
          <Button2
            buttonText="Clicked state"
            style={{
              borderRadius: "5px",
              fontSize: "10px",
              backgroundColor: "#023a61",
            }}
          />
          <Button2
            buttonText="Disabled state"
            style={{
              borderRadius: "5px",
              fontSize: "10px",
              backgroundColor: "#b8b8b8",
              cursor: "not-allowed",
            }}
          />
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
