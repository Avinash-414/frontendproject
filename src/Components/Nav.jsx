import React from 'react'

function Nav() {
  return (
    <div>
      <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
  <div ClassName="container-fluid">
    <a ClassName="navbar-brand" href="#">Navbar</a>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarNavDropdown">
      <ul ClassName="navbar-nav">
        <li ClassName="nav-item">
          <a ClassName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">Features</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="#">Pricing</a>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul ClassName="dropdown-menu">
            <li><a ClassName="dropdown-item" href="#">Action</a></li>
            <li><a ClassName="dropdown-item" href="#">Another action</a></li>
            <li><a ClassName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
