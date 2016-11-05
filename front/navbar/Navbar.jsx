import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => (
  <ul>
  {props.links.map((link, indx) => (
    <li key={indx}><Link to={link.url}>{link.title}</Link></li>
  ))}
  </ul>
)

export default Navbar;
