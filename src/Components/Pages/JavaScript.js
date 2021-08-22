import "../../Css/bootstrap.min.css";
import PageMaster from './PageMaster';
import SyntaxHighlighter from 'react-syntax-highlighter';
import InputManipulation from "../Reusable/InputManipulation";

export default function JavaScript() {

    
  return (
    <PageMaster>
      <div className="row">
        <h1 className="col-12">JavaScript/React</h1>
        <h2 className="col-12">Let's talk some JavaScript!</h2>
        <p className="col-12">JavaScript (or JS) is a multi-purpose programming language generally used for both server-side and client-side web scripting. JS is the tool that powers
         modern web applicaitons. While HTML and CSS are used to describe what content will be displayed on a webpage and how that content will appear, JS is typically what allows those
         pages to be expresive and interactive. There are a number of different frameworks and tools built on JS that allow programmers to use JavaScript in a number of different 
         environments. In fact, this entire website was built with the JS framework known as React, a tool designed to make creating frontend user interfaces a breeze.</p>

        <h3 className="col-12">So let's look at some JS!</h3>
        <p className="col-12">We'll start off with some input manipulation.</p>
      </div>
      <InputManipulation />
      <div className="row">
        <h3 className="mt-2 col-12">React and JavaScript: Manipulating the Document Object Model</h3>
        <p className="col-md-6 col-sm-12">First, by catching the input text and storing it in React State we can calculate some values based off of this input text that
        will be automatically updated in the <a href="https://en.wikipedia.org/wiki/Document_Object_Model">Document Object Model</a> or DOM (React technically uses what's called a Virtual DOM, 
        an in memory representation of the DOM that allows for
        more efficient updating of the document) </p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="javascript">
          {`
const [input, setInput] = useState("");

...

<input ... value={input} onChange={(e) => setInput(e.target.value) } />
          `}
        </SyntaxHighlighter>

        <p className="col-md-6 col-sm-12">From this input state we will calculate all of our values. Some of these values (like the total number of characters) can be calculated directly from 
        the input state. Others need a few extra steps to get the result we want. <br /> <br />
        Let's break this down section by section. The first section contains all of the state declarations for this component, allowing us to track values 
        from one DOM render to the next. The second section uses React's useEffect hook to schedule updates for the three state variables that are not assigned directly from the input.
         Essentially, the useEffect function dictates that every time the input state is changed the three functions to set the rest of our states are run. Finally, the last section
         assigns the necessary values to the custom Tracker UI components. Notice how both the Words and Unique components determine their value from the base input state.  </p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="javascript">
          {`
const [input, setInput] = useState("");
const [inputLetters, setInputLetters] = useState(0);
const [inputNumbers, setInputNumbers] = useState(0);
const [inputVowels, setInputVowels] = useState(0);

useEffect(() => {
  setInputLetters(getLetters(input));
  setInputNumbers(getNumbers(input));
  setInputVowels(getVowels(input));
}, [input])

<div className="tracker-container">
  <Tracker title="Chars" value={input.length} />
  <Tracker title="Letters" value={inputLetters} />
  <Tracker title="Digits" value={inputNumbers} />
  <Tracker title="Words" value={input ? input.trim().split(/\s+/).length : 0} />
  <Tracker title="Unique" value={input ? input.trim().split(/\s+/).filter((v, i, a) => a.indexOf(v) === i).length : 0} />
  <Tracker title="Vowels" value={inputVowels} />
</div>
          `}
        </SyntaxHighlighter>
        <p className="col-md-6 col-sm-12">Here we can see the actual functions that set the inputLetters, inputNumbers, and inputVowels states from the useEffect function in the above 
        code. Each function employs a <a href="https://en.wikipedia.org/wiki/Regular_expression">Regular Expression</a> search pattern to match the desired output. Each match is recorded 
        and the total number of matches is returned to the original calling function where the value is then assigned to the correct state variable. This means that every time a new character 
        is entered in the input box, the correct tracker component(s) are updated to reflect the newly added input.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="javascript">
          {`
export function getLetters(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/[a-z]/i)) ++count;
    }
    return count;
}

export function getNumbers(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/^\d+$/)) ++count;
    }
    return count;
}

export function getVowels(input) {
    let count = 0;
    for (let i = 0; i < input.length; ++i){
        if (input[i].match(/[aeiou]/gi)) ++count;
    }
    return count;

}
          `}
        </SyntaxHighlighter>
      </div>
    </PageMaster>
  );
}