import "../../Css/bootstrap.min.css"

export default function NavListItem(props) {
    
    const isActive = window.location.pathname === props.href;
  return (
        <li className={"nav-item " + (isActive ? "active" : "")} onClick={props.onClick}>
            <a className="nav-link" href={props.href}>{props.name}
                {isActive ? <span className="sr-only">(current)</span> : null}
            </a>
        </li>
  );
}