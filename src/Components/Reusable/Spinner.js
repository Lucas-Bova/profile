import { useState } from "react";
import "../../Css/bootstrap.min.css";
import "../../Css/example.css";

export default function Spinner(props) {

  const [changeColor, setChangeColor] = useState(0);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [fastSpin, setFastSpin] = useState(false);

  const handleChangeColor = () => {
    let colorValue = 0
    do {
      colorValue = Math.floor(Math.random() * 6);
    } while(colorValue === changeColor)
    setChangeColor(colorValue);
  }
    
  return (
    <div className="row border p-md-3">
        <div className="col-md-4 col-sm-12 offset-md-8 spin-cont">
          <div class={"spinner spinner-color" + changeColor + (fastSpin ? " fast" : "")}>
            <div class="side1">{removeNumbers ? "" : 1}</div>
            <div class="side2">{removeNumbers ? "" : 2}</div>
            <div class="side3">{removeNumbers ? "" : 3}</div>
            <div class="side4">{removeNumbers ? "" : 4}</div>
            <div class="side5">{removeNumbers ? "" : 5}</div>
            <div class="side6">{removeNumbers ? "" : 6}</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 spin-text">
          <h4>Spinning Box</h4>
          <p>Here we have a CSS animated box. <br /> The base code for the box was incorperated from answers to this question: <a href="https://stackoverflow.com/questions/17871528/create-a-rotating-cube-with-only-css">
            Stackoverflow</a></p>
          <p>We'll make a few quick improvements to the box through some React and CSS magic.</p>
          <input type="button" className="btn btn-primary col-md-8 col-sm-12" value="Change Color" onClick={() => handleChangeColor()} />
          <br />
          <br />
          <input type="button" className="btn btn-primary col-md-8 col-sm-12" value="Remove/Add Nums" onClick={() => setRemoveNumbers(!removeNumbers)} />
          <br />
          <br />
          <input type="button" className="btn btn-primary col-md-8 col-sm-12" value="Faster/Slower" onClick={() => setFastSpin(!fastSpin)} />
        </div>
      </div>
  );
}