import SocialMedia from "../data/SocialMedia";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3 ">
      <div className="container-fluid">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          style={{ width: "60px" }}
        />

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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Characters
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Vehicules
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Starships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Planets
              </a>
            </li>

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
                      <a className="dropdown-item" href={url}>
                        {icon}
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
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
