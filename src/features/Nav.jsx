import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/PuppyForm">
                Sign up
              </Link>

              {/* CAN A LINK BE USED FOR THE SEARCH BAR....? <Link className="nav-link" to="/PuppyForm">
                Sign up
              </Link> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}