import React from 'react'
import "./Card.css"

export function Card() {
  return (
 <div className="card" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

  )
}

//export default Card



//rcfe yazdığınızda component oluşturur
//rafce, rafcp, rafc, rafc+ yazdığınızda component oluşturur
//component nedir? bir fonksiyon
//componentin amacı bir arayüz oluşturmak ve bu arayüzü render etmek
//componentin içinde html yazılır ve bu html render edilir
//componentin içinde javascript yazılır ve bu javascript render edilir
//componentin içinde css yazılır ve bu css render edilir
//componentin içinde props yazılır ve bu props render edilir
//componentin içinde state yazılır ve bu state render edilir
//componentin içinde lifecycle yazılır ve bu lifecycle render edilir
//componentin içinde event yazılır ve bu event render edilir
//component içine component yazılır ve bu component render edilir
//componentin içinde form yazılır ve bu form render edilir





