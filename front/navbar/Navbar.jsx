import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => (
  <ul>
  {props.links.map(link => {
    <li><Link to={link.url}>{link.title}</Link></li>
  })}
  </ul>
)

export default Navbar;
