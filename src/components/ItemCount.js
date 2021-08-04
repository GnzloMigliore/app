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
    const confirmar = () => {
        if(stock > 0){
            onAdd(counter)
        }
    }
return(
<div>
<div>
<h4 className="d-flex justify-content-center">Cantidad: {counter}</h4>
</div>
<div className=" d-flex justify-content-center">

<Button variant ="light" className="m-2" onClick={descontarContador}>-</Button>
<Button variant ="light" className="m-2" onClick={aumentarContador}>+</Button>

</div>
<div>
   <Button variant ="dark" className="m-2" onClick={confirmar}>Confirmar</Button>
</div>
</div>
)
}

export default ItemCount;