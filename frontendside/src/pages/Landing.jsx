import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";


const Landing = () => {
  const router =useNavigate()
  return (

      
<>

    

<NavBar/>
 



   <div className="landingMainContainer">
  <div><h1><span style={{color:"#FF9839"}}>Connect</span> with your Loved Ones</h1>
   <p>Cover a Distance by Zoomiee</p>
   <div role="button">
    <Link to ={"/auth"} >Get Started</Link>
   </div>
  </div>  
   <div>
   <img src="/mobile.png" alt=""/>
   </div> 
  </div>
</>


  )
}

export default Landing