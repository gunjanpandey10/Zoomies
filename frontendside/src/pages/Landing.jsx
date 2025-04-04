import "../App.css";
import { Link, useNavigate } from "react-router-dom";


const Landing = () => {
  const router =useNavigate()
  return (
    // <div className="landingPageContainer">
    //   <nav>
    //     <div className="navHeader"> <h2>Zoomiee</h2>     </div>
    //     <div className="navlist">
    //         <p onClick={()=>{
    //          router("/ab45");
    //         }}>Join as Guest</p>
    //         <p onClick={()=>{router("/auth")}}>Register</p>
    //         <div onClick={()=>{router("/auth")}}role="button"><p>Login</p></div>
    //     </div>


    //     </nav>  

      


    
<div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Zoomie</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li class="nav-item">
          <a class="nav-link" href="/ab45">Join as Guest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/auth">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/auth">Register</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


   <div className="landingMainContainer">
  <div><h1><span style={{color:"#FF9839"}}>Connect</span> with your Loved Ones</h1>
   <p>Cover a Distance by Zoomiee</p>
   <div role="button">
    <Link to ={"/auth"}  Get Started></Link>
   </div>
  </div>  
   <div>
   <img src="/mobile.png" alt=""/>
   </div> 
  </div>
  </div>


  )
}

export default Landing