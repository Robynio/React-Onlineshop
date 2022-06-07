import React from 'react'

function Product3(props) {
  return (
    <div>
     {/*<div className="container-md row row-cols-1 row-cols-md-4 g-4 pt-5 gx-5 gy-5"
    style={{margin:"auto"}}>*/}
        <div className="col">
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div id='productPrice'>
      {props.price}
  </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Product3