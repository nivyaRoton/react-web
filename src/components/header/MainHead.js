import React from 'react'
import {FiSearch}  from 'react-icons/fi';
import {IoPerson }from 'react-icons/io5';

const MainHead = () => {
  return (
  <div style={{width:"1100px"}} className="shadow-sm p-1 mb-2 bg-body rounded"> 
  <nav className="navbar navbar-expand-lg white ">
  <div className="container-fluid">
    <h3 style={{marginRight:"5px"}}>PICKSY.</h3>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex m-auto">
      <div className="input-icons" style={{ width: "100%",
            marginBottom: "10px"}}>
      
      <FiSearch style={{position:'absolute' ,   marginTop: "12px" , marginLeft: "3px"}}/>
        <input  style={{backgroundColor:"#F5F5F5"}} className="form-control me-5 " type="search" placeholder="    What Are You Looking For?                          " aria-label="Search" />
        </div>
      </form>
      <IoPerson/>
    </div>
  </div>
  
</nav>
<hr />

</div> 
  )
}
export default MainHead