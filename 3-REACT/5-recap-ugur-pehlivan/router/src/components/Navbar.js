import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

function Navbar(props) {
//   setTimeout(() => {
//       props.history.push("/about")
//   }, 2000);
//   console.log(props);
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Gloaria</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <Link to="/about">About</Link>
        </button>
        <button className="ui button">
          <NavLink to="/contact">Contact</NavLink>
        </button>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
