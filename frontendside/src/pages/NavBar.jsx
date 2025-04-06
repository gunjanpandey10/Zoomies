import React from 'react'

export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
    <div class="container p-2">
    <a class="navbar-brand" href="#">Zoomie</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
        <form class="d-flex" role="search">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          

          <li class="nav-item">
            <a class="nav-link active" href="/ab45">Join as Guest</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/auth">Login</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/auth">Register</a>
          </li>
         
        </ul>
        </form>
      </div>
    </div>
  </nav>
  )
}
