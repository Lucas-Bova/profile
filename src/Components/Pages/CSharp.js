import "../../Css/bootstrap.min.css";
import PageMaster from './PageMaster';
import SyntaxHighlighter from 'react-syntax-highlighter';
import ItemExsists from "../Reusable/ItemExsists";

export default function CSharp() {
    
  return (
    <PageMaster>
      <div className="row">
        <h1 className="col-12">C#</h1>
        <h2 className="col-12">Let's talk about the multi-paradigm programming language known as C#!</h2>
        <p className="col-12">
          C# is a general-purpose, multi-paradigm programming language developed by the Microsoft Corporation. The language comes from the C family of programming language and was, at 
          the time of its inception, remarkably similar to the Java programming language. While the two lanaguages have diverged in some important ways since the creation of C#, 
          knowledge of one often aids in understanding the other. C# can be used to solve increadibly complex important problems, while also being suitable for creating simple programs 
          and services. This quality makes C# an ideal language for any developer to have in their tool belt. 
        </p>
        <h3 className="col-12">So let's look at some C#</h3>
        <p className="col-12">We will begin by looking at a generic binary search algorithm.</p>
      </div>
      <div className="row">
        <p className="col-md-6 col-sm-12">We'll start with a complete view of the generic method. This code would take a collection of items (like an group of numbers or words) add 
        search the collection for a given search parameter, returning a value of true if the parameter exists in the collection and false if it does not.</p>
        <ItemExsists />
        <p className="col-md-6 col-sm-12">So, for example, we would expect to see the following results for the given inputs. Where true means the collection contains the search 
        parameter and false means it does not.</p>
        <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="csharp">
          {`
Input Collection: 1,2,3,4,5;
Input Search Paramenter: 4;
Output: true;

Input Collection: "red","green","blue","pink","yellow";
Input Search Paramenter: "green";
Output: true;

Input Collection: 1,2,3,4,5;
Input Search Paramenter: 7;
Output: false;

Input Collection: "red","green","blue","pink","yellow";
Input Search Paramenter: "cyan";
Output: false;

          `}
        </SyntaxHighlighter>
        <p className="col-12">This may look like an easy problem to solve, and it is true that there are a multitude of search algorithms that would be able to make this
         calculation. But it is how this algorithm solves the problem that is impressive. In computer science terms we would say the algorithm has an O(log n) time complexity, 
         where n = the number of items in the collection and O = order of complexity (we can think of this as the number of operations the code needs to make to get the desired 
         result). This means the algorithm will never have to look at every item in the collection (unless the collection is extreamly small) to determine if the search parameter 
         exists in the collection. This also means that the larger the collection is, the more items of the collection the code can ignore to make its calculation. Let's look 
         at this by going through a quick example.</p>
         <p className="col-md-6 col-sm-12">We can see here that in one run through the algorithm we have eliminated half of the collection from consideration! This might not seem 
         significant with a collection of ten items but imagine a collection of a hundered, a thousand, or even a million items. Instantly elmininating five hundered thousand items in 
         the collection from consideration is a huge time saver and is what makes this algorithm so powerful. As the number of inputs increases the time complexity of the algorithm 
         increases at a smaller rate, meaning the algorithm is fast regardless of the total size of the input.</p>
         <SyntaxHighlighter className="border col-md-6 col-sm-12 pre-scrollable" language="csharp">
           {`
Input Collection: 1,2,3,4,5,6,7,8,9,10;
Input Search Paramenter: 6;

//first time through the algorithm
var upperBoundary = 10;
var lowerBoundary = 0;

var currentPosition = (0 + 10) / 2 = 5;

var comparisonResult = (compare 5 to 6) = 5 < 6;

lowerBoundary = 5;

//second time through the algorithm
var upperBoundary = 10;
var lowerBoundary = 5;

var currentPosition = (5 + 10) / 2 = 7; //we drop the remainder

var comparisonResult = (compare 7 to 6) = 7 > 6;

upperBoundary = 7;

//third time through the algorithm
var upperBoundary = 7;
var lowerBoundary = 5;

var currentPosition = (5 + 7) / 2 = 6;

var comparisonResult = (compare 6 to 6) = 6 == 6;

return true;

           `}
         </SyntaxHighlighter>
      </div>
    </PageMaster>
  );
}