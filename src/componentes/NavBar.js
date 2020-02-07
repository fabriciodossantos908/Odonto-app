import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark mb-5">
      <a
        className="navbar-brand text-white text-uppercase"
        href="/"
      >
        Odonto
      </a>


      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link text-white">
              <i class="fas fa-home"></i>
              {/* &nbsp; Para termos espaço e branco antes do icon  */}
              &nbsp;Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">
              <i class="fas fa-tooth"></i>
              &nbsp;Dentistas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">
              <i class="fas fa-user-injured"></i>
              &nbsp;Pacientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">
              <i class="far fa-calendar-alt"></i>
              &nbsp;Agendar Consultas
            </a>
          </li>
        </ul>

        <form className="form-inline">
          <input className="form-control mr-2"
            type="search"
            placeholder="Buscar..."
          />
          <button
            className="btn btn-primary btn-sm"
            type="button"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}


export default NavBar;