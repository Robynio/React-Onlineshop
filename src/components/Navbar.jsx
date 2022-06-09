import React from 'react'

function Navbar(props) {
  return (
    <div>
        <nav className='nav shadow rounded'>

        <ul className='nav-list'>
        <li>
          Fly Veggie Shoe Co.
        </li>   
        <li>
            __
        </li> 
        </ul>
        <div>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" href="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
        </div>
        
        </nav>
    </div>
  )
}

export default Navbar