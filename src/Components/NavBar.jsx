import "../Components/NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  // console.log()
  return (
    <>
      <header>
        <nav className="navbar navbar-expand">
          <div className="container">
            <Link to="/" className="navbar-brand fs-1">
              <span>You</span>Tube
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">  Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutMe" className="nav-link"> About </Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/video/:videoId" className="nav-link"> Show Page </Link>
            </li> */}
            </ul>
          </div>
        </nav>
      </header>

      {/* <h1 className="search"> Search For What You Want To See </h1> */}

    </>
  )
}

export default NavBar