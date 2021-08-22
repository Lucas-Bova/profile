import "../../Css/bootstrap.min.css";
import "../../Css/example.css";
import PageMaster from "./PageMaster";
import SyntaxHighlighter from "react-syntax-highlighter";
import Spinner from '../Reusable/Spinner'

export default function CSS() {
    
  return (
    <PageMaster>
      <div className="row">
        <h1 className="col-12">CSS</h1>
        <h2 className="col-12">Let's talk about some Cascading Style Sheets!</h2>
        <p className="col-12">
          CSS or cascading style sheets is a style sheet language used to style web documents. HTML describes what elements should be on a web page while CSS describes how those
          elements should be presented. There are technologies (i.e. bootstrap) that help to abstract
          away some of the more complicated concepts of CSS but a sound understanding of the technology can mean the difference between a positive and a negative user expierience.
        </p>

        <h3 className="col-12">So let's look at some CSS!</h3>
        <p className="col-12">We'll start off with some animation.</p>
      </div>
      <Spinner />
      <div className="row">
        <h3 className="mt-2 col-12">So what's happening here?</h3>
        <p className="col-md-6 col-sm-12">First, to change color we create a differnt CSS class for each color we want the cube to turn. It's 
        important that each class has a unique number on the end of its name so we can randomly assign one class to our cube element.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="css">
        {`
.spinner-color0 div {
  background: rgba(255,255,255,0.8);
}

.spinner-color1 div {
  background: rgba(223, 97, 97, 0.8);
}

.spinner-color2 div {
  background: rgba(167, 238, 153, 0.8);
}
.spinner-color3 div {
  background: rgba(23, 87, 99, 0.8);
}
.spinner-color4 div {
  background: rgba(206, 10, 255, 0.8);
}
.spinner-color5 div {
  background: rgba(153, 118, 3, 0.8);
}
            `}
        </SyntaxHighlighter>
        <p className="col-md-6 col-sm-12">Then its just a simple assigning of a random color class to our cube element in the React code. The do while loop ensures that we
        will get a different color every time the button is clicked.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="javascript">
        {`
const handleChangeColor = () => {
  let colorValue = 0
  do {
    colorValue = Math.floor(Math.random() * 6);
  } while(colorValue === changeColor)
  setChangeColor(colorValue);
}

...

<div class={"spinner spinner-color" + changeColor>
            `}
        </SyntaxHighlighter>
        <p className="col-md-6 col-sm-12">Its a similar process to add and remove the numbers from the cube. The whole function is completed in Javascript.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="javascript">
          {`
<input type="button" value="Remove/Add Nums" onClick={() => setRemoveNumbers(!removeNumbers)} />

...

<div class={"spinner spinner-color" + changeColor + (fastSpin ? " fast" : "")}>
  <div class="side1">{removeNumbers ? "" : 1}</div>
  <div class="side2">{removeNumbers ? "" : 2}</div>
  <div class="side3">{removeNumbers ? "" : 3}</div>
  <div class="side4">{removeNumbers ? "" : 4}</div>
  <div class="side5">{removeNumbers ? "" : 5}</div>
  <div class="side6">{removeNumbers ? "" : 6}</div>
</div>
          `}
        </SyntaxHighlighter>
        <p className="col-md-6 col-sm-12">Finally, getting the cube to spin faster involves adding a CSS class that
        overwrites the animation properties of the spinner class. We simply add and remove this class when the button 
        is pressed.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrillable" language="css">
          {`
.spinner {
  -webkit-animation: spincube 12s ease-in-out infinite;
  animation: spincube 12s ease-in-out infinite;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-origin: 60px 60px 0;
  transform-origin: 60px 60px 0;
}

.fast {
  -webkit-animation: spincube 3s ease-in-out infinite;
  animation: spincube 3s ease-in-out infinite;
}
          `}
        </SyntaxHighlighter>
      </div>
    </PageMaster>
  );
}