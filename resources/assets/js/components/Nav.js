import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => (
  <nav>
  <ul>
    <li><Link to="/">LaravelReact</Link></li>
  </ul>
  
  <ul>
    <li><Link to="/"> <i className="fas fa-angle-right"></i> Home</Link></li>
    <li><Link to="/createPost"> <i className="fas fa-angle-right"></i>new Post</Link></li>
 
  </ul>
  </nav>
 

);
  

  
  

export default Nav;