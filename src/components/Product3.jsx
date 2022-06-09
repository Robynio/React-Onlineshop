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
        <p className="card-text">Absolut stylische Sneaker, völlig tierfrei & 100% vegan und fair hergestellt aus natürlichen Materialien die biologisch abbaubar sind.</p>
        <div id='productPrice'>
      {props.price}
  </div>
  <div>
      {props.button}
    </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Product3