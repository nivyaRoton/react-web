import React from 'react'
import { FiSearch } from 'react-icons/fi';

const MainHead = () => {
  return (
  <div style={{width:"1100px"}} className="shadow-sm p-1 mb-2 bg-body rounded"> 
  <nav className="navbar navbar-expand-lg white ">
  <div className="container-fluid">
    <h3 style={{marginRight:"5px"}}>PICKSY.</h3>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul> */}
      <form className="d-flex">
      <div className="input-icons" style={{ width: "100%",
            marginBottom: "10px"}}>
      
      <FiSearch style={{position:'absolute' ,margin:"6px" }}/>
        <input  className="form-control me-5 " type="search" placeholder="    What Are You Looking For?" aria-label="Search" />
        </div>
       
       
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
</nav>
</div> 
  )
}
export default MainHead