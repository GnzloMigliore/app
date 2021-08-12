import ItemList from "./ItemList"
import React, {useEffect, useState} from "react";
import {prod} from "./products"
import { useParams } from "react-router";
import '../css/ItemDetail.css';
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])
    const params = useParams()
    console.log(params);
    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
            
            if (params.id) {
                resolve(prod.filter(producto=>producto.categoria === params.id))
             
            } else {
                
                resolve(prod)
            }
        },2000)
    })
    promesa.then((prod)=>{
        setProductos(prod)
    })
    },[params])

    return(
<>
    <ItemList productos={productos}/>
</>
    )
}
export default ItemListContainer