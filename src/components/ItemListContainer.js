import ItemList from "./ItemList"
import React, {useEffect, useState} from "react";
import {prod} from "./products"
const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(prod)
        },2000)
    })
    promesa.then((prod)=>{
        setProductos(prod)
    })
    },[])

    return(
<>
    <ItemList productos={productos}/>
</>
    )
}
export default ItemListContainer