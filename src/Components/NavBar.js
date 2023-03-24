import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function NavBar(props) {

  
  return (
    <><nav id="mainnav" className="navbar navbar-expand-md navbar-dark bg-dark text-white navbar-shrink">
      <div className="container">
        <a className="navbar-brand" id="navlogo" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mx">
            <li className='ml-3'><a href="#" className='text-white'>Home</a></li>
            {/* <li className='ml-4'><Link to="/About" className='text-white'>About</Link></li> */}
          </ul>
          <ul className="navbar-nav ml-auto">
            <div className="my-2 ml-2 custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" onClick={props.graymode} id="customSwitch1"/>
  <label className="custom-control-label " for="customSwitch1">Gray Mode</label>
</div>
            <div className="my-2 ml-2 custom-control custom-switch">
  <input type="checkbox" className="custom-control-input" onClick={props.blackmode} id="customSwitch2"/>
  <label className="custom-control-label " for="customSwitch2">Black Mode</label>
</div>
          </ul>
        </div>
      </div>
    </nav>
      </>
  )
}
