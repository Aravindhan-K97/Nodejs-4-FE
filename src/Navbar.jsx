import { NavLink } from "react-router-dom"
import './style/Navbar.css'
export const Navbar = () => {
    return(
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src="images/image.png " alt="" style={{width:"15rem",height:"8em"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register' >Register</NavLink>
       <NavLink to='/login'>login</NavLink>
       <NavLink to='/forgotpassword'>Forgotpassword</NavLink>

        </div>
    </div>
  </div>
</nav>
    )
}