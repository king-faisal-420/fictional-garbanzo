import React from 'react'
import picture from '../assest/images/soda.png'
function Navbar(props) {
  return (
   <header>
    <div className="container-fluied behind">
    <div className="container">
     <nav className="navbar navbar-expand-lg navbar-light behind rounded">
    <a className="navbar-brand" href="#"><img className='logo img-fluid' src={picture} alt="" /></a>
    <button className="navbar-toggler bg-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white p-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white p-4" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link active text-white p-4" aria-current="page" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white p-4" href="#" tabindex="-1" aria-disabled="true">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white p-4" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
      <div className="d-flex">
       <div className="row g-0 pe-5">
        <div className="col-md-6 p-3 g-0">
          <a className='text-white dot' href="/">Log In</a>
        </div> 
        <div className="col-md-6 g-0 p-3">
        <a className='text-white dot' href="/">Register</a>
        </div>
       </div>
      </div>
    </div> 
</nav>
   </div>
   </div>
   </header>
  )
}

export default Navbar
