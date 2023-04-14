import { Link } from "react-router-dom";

function Nav() {
  
  return (
    <div className="container-fluid nav-bar fixed-top">

      <div className="row nav">

        <div className="col">
          <Link to="/">
            <img className="nav-logo" src="andreslogo.gif" alt=""/>
          </Link>
        </div>

        <div className="col">
          <Link to="/contact">
            <div className="nav-label">Contact</div>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Nav;