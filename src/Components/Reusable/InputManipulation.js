import { useEffect, useState } from "react";
import "../../Css/bootstrap.min.css";
import { getLetters, getNumbers, getVowels } from "../../JS/inputTracker";
import Tracker from './Tracker';

export default function InputManipulation() {

  const [input, setInput] = useState("");
  const [inputLetters, setInputLetters] = useState(0);
  const [inputNumbers, setInputNumbers] = useState(0);
  const [inputVowels, setInputVowels] = useState(0);

  useEffect(() => {
    setInputLetters(getLetters(input));
    setInputNumbers(getNumbers(input));
    setInputVowels(getVowels(input));
  }, [input])
    
  return (
      <div className="row border p-3">
        <div className="col-md-6 col-sm-12">
          <input className="col-12 form-control" type="text" placeholder="Write some text here!" value={input} onChange={(e) => setInput(e.target.value) }  maxLength="500"/>
          <button className="btn btn-primary col-6 mt-1 mb-1" type="button" onClick={() => setInput("")}>Clear</button>
          <button className="btn btn-primary col-6 mt-1 mb-1" type="button" onClick={() => input.length < 5000 ? setInput(input + input) : setInput("Max Input Reached")}>Duplicate</button>
          <p>Enter some text into the input box and see it get processed in real time!</p>
          <p>This effect is all made possible through React and JavaScript. Read on to see how it all comes together.</p>
        </div>
        <div className="col-md-6 col-sm-12 tracker-container">
          <Tracker title="Chars" value={input.length} />
          <Tracker title="Letters" value={inputLetters} />
          <Tracker title="Digits" value={inputNumbers} />
          <Tracker title="Words" value={input ? input.trim().split(/\s+/).length : 0} />
          <Tracker title="Unique" value={input ? input.trim().split(/\s+/).filter((v, i, a) => a.indexOf(v) === i).length : 0} />
          <Tracker title="Vowels" value={inputVowels} />
        </div>
      </div>
  );
}