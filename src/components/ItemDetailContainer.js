import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
import {prod} from "./products"
import Spinner from 'react-bootstrap/Spinner'
const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [estado, setEstado] = useState("pendiente");
    const params = useParams()
    //console.log(params)

    useEffect(() => {
        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                if (params.id) {
                    res(prod.find(producto => producto.id === params.id))
                } else {

                    res(console.log("Producto no encontrado"))
                }
            }, 2000)
            setEstado("pendiente")
        })
        getItem.then((data_product) =>
            setProducto(data_product))
            .then(() => setEstado("terminado"))
    }, [params.id])
    console.log(producto)
    if (estado === "pendiente") {
        return(

        <div>
         <h3 className="title">Detalle de Producto:</h3>
            <Spinner animation="border" role="status" className="d-block m-auto spinner" >
                <span className=" visually-hidden">Loading...</span>
            </Spinner>
        </div>
        )
    } else {

        return (
            <div>
           <h3 className="title">DETALLE DEL PRODUCTO:</h3>
                <ItemDetail producto={producto} />
            </div>
        )
    }
}

export default ItemDetailContainer