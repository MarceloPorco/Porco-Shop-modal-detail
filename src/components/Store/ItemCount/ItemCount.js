import { useState } from "react";


function ItemCount ({stock, initial}){
    const [contStock, setcontStock] = useState (1)
    const [cart, setcart] = useState([])

    const aumento =()=> stock > contStock && setcontStock(contStock + 1) 
    const decremento=()=> contStock > 1 && setcontStock(contStock - 1) 
    const onAdd=()=> setcart (...cart,{initial});
    
    return(
    <>
        <div className="d-flex justify-content-evenly">
            <button className="btn btn-success" onClick={decremento}>-</button>
            <p className="card-text">{contStock}</p>   
            <button className="btn btn-success" onClick={aumento}>+</button> 
        </div>
        <button className="btn btn-warning" onClick={onAdd}>Agregar</button> 
    </>
    )
} ;

export default ItemCount;