import React from 'react'

function Product7(props) {
  return (
    
        <div>
        
        <div className="col">
          <div className="card">
            <img src={props.img} className="card-img-top" alt="Product-7"/>
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

export default Product7