import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <Link to="/"><h1>Allan</h1></Link>
      <ul>
        <NavLink className={({ isActive }) => isActive ? 'isActive' : "navLink"} to="/">HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'isActive' : "navLink"} to="/contact-me">CONTACT</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'isActive' : "navLink"} to="/about">ABOUT</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar