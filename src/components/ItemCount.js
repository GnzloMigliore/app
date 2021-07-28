import {useState} from "react";
import  { Button }  from  'react-bootstrap' ;
const ItemCount = ({stock,initial,onAdd}) => {

const [counter,setCounter]=useState(initial);

const aumentarContador=()=>{
if(counter<stock){
    setCounter(counter+1)}else{

    }
}
const descontarContador=()=>{
    if(counter>0){
        setCounter(counter-1)}else{
    
        }
    }
return(
<div>
<div>
<h2 className="d-flex justify-content-center">Cantidad: {counter}</h2>
</div>
<div className=" d-flex justify-content-center">

<Button variant ="dark" className="m-2" onClick={descontarContador}>-</Button>
<Button variant ="dark" className="m-2" onClick={aumentarContador}>+</Button>
</div>
</div>
)
}

export default ItemCount;