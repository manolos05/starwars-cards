import SocialMedia from "../data/SocialMedia";
import { Link } from "react-router-dom";

const NavBar = () => {
  const menu = ["People", "Films", "Starship", "Planets"];
  return (
    <nav className="navbar  navbar-expand-md bg-dark p-3 ">
      <div className="container-fluid ">
        <Link to="/">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            style={{ width: "60px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-warning"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav">
            {menu.map((menus, i) => (
              <li key={i}>
                <Link className="nav-link" to={`/${menus}`}>
                  {menus}
                </Link>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Social Media
              </a>
              <ul className="dropdown-menu">
                {SocialMedia.map(({ id, url, icon }, i) => {
                  return (
                    <li key={i}>
                      <a className="dropdown-item" href={url} target="_blank">
                        {icon} {id}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </a>
              <ul className="dropdown-menu">
                <li>Hola</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
