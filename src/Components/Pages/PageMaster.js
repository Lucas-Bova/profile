import "../../Css/bootstrap.min.css"

export default function PageMaster(props) {
    
  return (
    <div class="containter">
    <div class="row">
      <div class="col-8 offset-2">
          {props.children}
      </div>
    </div>
  </div>
  );
}