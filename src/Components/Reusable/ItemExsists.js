import "../../Css/bootstrap.min.css";
import SyntaxHighlighter from 'react-syntax-highlighter';

export default function ItemExsists(props) {
    
  return (
      <SyntaxHighlighter className={"border pre-scrollable " + props.size ? props.size : "col-md-6 col-sm-12"} language="csharp">
          {`
public static bool ItemExsistsInCollection<T>(this IEnumerable<T> collection, T searchParameter) where T : IComparable
{
    
    var upperBoundary = collection.Count();
    var lowerBoundary = 0;
    do
    {
        var currentPosition = (lowerBoundary + upperBoundary) / 2;
        var comparisonResult = (ResultValues.ResultValue) collection.ElementAt(currentPosition).CompareTo(searchParameter);

        if (comparisonResult == ResultValues.ResultValue.Equal) return true;
        if (currentPosition == lowerBoundary || currentPosition == upperBoundary) return false;

        if (comparisonResult == ResultValues.ResultValue.LessThan)
        {
            lowerBoundary = currentPosition;
        }
        else
        {
            upperBoundary = currentPosition;
        }
    } while (true);
}
}
          `}
        </SyntaxHighlighter>
  );
}