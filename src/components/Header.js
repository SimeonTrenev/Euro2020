import React from "react";
import './Header.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <nav >
       <div className="navigation">
      <NavLink to="/" exact  className="navlinks" >
        Home
      </NavLink>
      <NavLink to="/groups" exact  className="navlinks" >
        Groups
      </NavLink>
      <NavLink to="/teams" exact  className="navlinks" >
        Teams
      </NavLink>
      <NavLink to="/results" exact  className="navlinks" >
         Results 
      </NavLink>
      <NavLink to="/tables" exact  className="navlinks" >
          Tables
      </NavLink>
      <NavLink to="/add-teams" exact className="navlinks">
          Add Team  
      </NavLink>
      </div> 
    </nav>
  );
};

export default Header;
