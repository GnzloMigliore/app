import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router";
import Footer from "./Footer"
import { baseDatosFB } from "./firebase/index"
import '../css/ItemDetail.css';
const ItemDetailContainer = () => {
    /* estado de los productos a mostrar que inicia vacío */
    const [producto, setProducto] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()
    console.log(params)
    //console.log(params.id)

    useEffect(() => {
        //Referencia a la DB
        const db = baseDatosFB
        //Referencia a una coleccion
        const collection = db.collection("productos")

        if (params.id) {
            const filtro = collection.doc(params.id)
            console.log(filtro)
            const query = filtro.get()
            console.log(query)
            query.then((resultados) => {
                //console.log(resultados)

                //el id esta separado del resto de la data
                const id = resultados.id
                const data = resultados.data()
                console.log(data)
                const data_final = { id, ...data }
                setProducto(data_final)
            }).catch((error) => {
                console.log(error);
                console.log("Error al cargar los productos, intentá nuevamente");
            }).finally(() => {
                setEstado("terminado");
            });

        } else {
            console.log("Producto no encontrado")
            setEstado("terminado")
        }


    }, [params.id])
   // console.log(producto)


    if (estado === "pendiente") {
        return (

            <div className="loader">
               
                
            <img   src={"/images/loader.gif"}  alt="loader"/>
             </div>
        )
    } else {

        return (
            <div>
               <article class="col-8 mx-auto">
                <h2 class="titulo-crear pb-3 border-bottom text-center pt-5 mx-auto text-uppercase">DETALLE DEL PRODUCTO</h2>
                </article>
                <ItemDetail producto={producto} />
                <Footer />
            </div>
        )
    }
}

export default ItemDetailContainer