import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import logo from '../camera_logo.png';
import { Counter } from '../features/counter/Counter';

const activeStyle = {
  color: "Orange"
}
 
class Navbar extends React.Component {
  render() {


    return (
      <div className = "NavCon">
        <NavLink className = "NavLink"
          to="/foods"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Navlink */
          /* add prop for activeStyle */
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >Select Food</NavLink>

        <NavLink className = "NavLink"
          to="/food_new"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Navlink */
          /* add prop for activeStyle */
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >Sell Food</NavLink>

        <NavLink className = "NavLink"
          to="/guides"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Navlink */
          /* add prop for activeStyle */
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >Shopping Helper</NavLink>

        <NavLink className = "NavLink"
          to="/stats"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          /* add styling to Navlink */
          /* add prop for activeStyle */
          style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
        >Stats</NavLink>
        <div className = "scan">
        <img src={logo}  alt="logo"/>
        </div>
        <div className = "point">
        <Counter />
        </div>
      </div>
    )
  }
}
 
export default Navbar;