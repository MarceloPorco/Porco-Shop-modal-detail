import { useState } from "react"
import {Data} from "../../Data"
import Card from "./Cards/Cards"


function Store (){
const [listItem, setListItem] = useState ([])


const product =(task,time)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(task.length > 0){
             resolve( setListItem(task))
            }else {reject("error 404")
            }},time)
     })
    }
     product (Data,2000)  //solo me toma este, no me toma el then 
        .then (()=>product(Data, 8000))
        .catch("error")
        
return(
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">  {
         listItem.map( ind=>  <Card 
                     id={ind.id}
                     nombre={ind.nombre} 
                     valor={ind.valor}
                     tipo={ind.tipo}
                     stock={ind.stock}  />) 
                   
        } </div>   
 
    </>
)
}
export default Store