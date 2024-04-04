import React from 'react'
import { Link } from 'react-router-dom'
import { IoFastFoodOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-warning">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" to="#">Recipe</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
       
        <li class="nav-item ">
          <Link  style={{fontSize:'50px'}}class="nav-link active" aria-current="page" to="Home1"> <IoFastFoodOutline />Recipe Website</Link>
        </li>
    
      
        
        <li class="nav-item">
          <Link class="nav-link " aria-disabled="true"></Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
