import {useState} from "react";
import  { Button }  from  'react-bootstrap' ;
import { LinkContainer } from 'react-router-bootstrap'
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
<h4 className="d-flex justify-content-center mt-5">Cantidad: {counter}</h4>
</div>
<div className=" d-flex justify-content-center mt-2">

<Button variant ="light" className="m-2" onClick={descontarContador}>-</Button>
<Button variant ="light" className="m-2" onClick={aumentarContador}>+</Button>

</div>
<div className=" d-flex justify-content-center mt-3">
   <Button variant ="dark" className="m-2 d-flex justify-content-center" onClick={confirmar}>Confirmar</Button>
   <LinkContainer to="/">
      <Button variant ="secondary" className="m-2 d-flex justify-content-center"style={{ width: '5rem' }}>Volver</Button>
   </LinkContainer>
</div>
</div>
)
}

export default ItemCount;