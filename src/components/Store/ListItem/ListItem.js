import { useState } from "react"
import Item from "./Items"



function ListItem (){
    return(
    <>
<Item/>
    </>
    )}

export default ListItem
































// const [lista, setLista] = useState([])
// let list = false



// const product =(task,id, nombre, stock)=>{
// return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//        if(task){
//            resolve({id, nombre,stock})
//        }else{
//            reject("error 404")
//        }
//     },2000)
//    })
// }
// const promise=()=> { (list = !list)        
// product(list,id, nombre, stock)
// .then( res=>setLista([...lista, {res}] ))}


// return(
// <>
// <button onClick={promise}>armar lista de stock</button>
// {
// (list) && <p>hola</p> 

// }
