import React from 'react';

const Nav = () => (
  <header className="header-global">
    <nav
      id="navbar-main"
      aria-label="Primary navigation"
      className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent navbar-theme-primary"
    >
      <div className="container position-relative">
        <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4 btn-ungu" href="./home.html">
          <img className="navbar-brand-dark" src="./assets/img/brand/pnr4.png" alt="Logo light" />
          <img className="navbar-brand-light" src="./assets/img/brand/pnr4.png" alt="Logo dark" />
        </a>
        <div className="navbar-collapse collapse position-absolute right-0" id="navbar_global">
          <div className="navbar-collapse-header">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="./../home.html" className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                  <img src="./assets/img/brand/pnr4.png" alt="Themesberg logo" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <a href="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
              </div>
            </div>
          </div>
          <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
            <li className="nav-item">
              <a href="./html/pages/layanan-dokter.html" className="nav-link">
                <span className="nav-link-inner-text">Layanan Dokter</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="./html/pages/kamar.html" className="nav-link">
                <span className="nav-link-inner-text">Informasi Kamar</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="./html/pages/login.html" className="btn btn-primary nav-link text-black btn-ungu">
                <span className="nav-link-inner-text">Log In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;