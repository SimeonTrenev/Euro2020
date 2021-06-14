import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav >
      <NavLink to="/" exact style={{color: "red"}}>
        Home
      </NavLink>
      <NavLink to="/groups" exact style={{color: "red"}}>
        Groups
      </NavLink>
      <NavLink to="/teams" exact style={{color: "red"}} >
        Teams
      </NavLink>
      <NavLink to="/results" exact style={{color: "red"}}>
         Results 
      </NavLink>
    </nav>
  );
};

export default Header;
