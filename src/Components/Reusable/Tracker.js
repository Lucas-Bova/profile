import "../../Css/example.css";
export default function Tracker(props) {

    return(
        <div className="col-6 border text-center tracker-box">
            <h4 className="col-md-12 col-sm-12 tracker-text">{props.title}</h4>
            <span className="col-md-12 col-sm-12 text-primary tracker-number">{props.value}</span>
        </div>
    );
}