import React from 'react'
import {Link} from "react-router-dom"


export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
    <div class="container p-2">
    <a class="navbar-brand" href="#">Zoomie</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="right-cont">
       
        <form class="d-flex" role="search">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          

          <li class="nav-item">
            <Link class="nav-link active" to="/ab45">Join as Guest</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link active" to="/auth">Login</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link active" to="/auth">Register</Link>
          </li>
         
        </ul>
        </form>
        </div>
      </div>
    </div>
  </nav>
  )
}

