import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Salary_dapp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/manager">Manager</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee">Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
