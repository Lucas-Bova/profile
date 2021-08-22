import { useState } from "react";
import "../../Css/bootstrap.min.css"
import NavListItem from "./NavListItem";

export default function NavBar() {

  const [dropdown, setDropdown] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand offset-2" href="/">Lucas Bova</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" 
        aria-expanded={!isNavCollapsed ? true : false} onClick={() => setIsNavCollapsed(!isNavCollapsed)} aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class={(isNavCollapsed ? "collapse": "") + " navbar-collapse"} id="navbarColor03">
        <ul class="navbar-nav mr-auto">
            <NavListItem name="Home" href="/" />
            {/* <NavListItem name="Blog" href="/blog" />  */}
            {/* <NavListItem name="About" href="/about" /> */}
            <NavListItem name="Contact" href="/contact" /> 
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" 
            onClick={() => setDropdown(!dropdown)}>Skills</a>
              <div class={"dropdown-menu " + (dropdown ? "show" : "")} onMouseLeave={() => setDropdown(!dropdown)}>
                <a class="dropdown-item" href="/css">CSS</a>
                <a class="dropdown-item" href="/javascript">JavaScript/React</a>
                <a class="dropdown-item" href="/csharp">C#</a>
              </div>
            </li>
        </ul>
        </div>
      </nav>
  );
}