
import React, { useEffect, useState } from "react";
/* import { prod } from "./productos" */
import ItemList from "./ItemList"
import { useParams } from "react-router";
import Footer from "./Footer"
import '../css/ListContainer.css';
import ButtonGroup from "react-bootstrap/ButtonGroup"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import { LinkContainer } from 'react-router-bootstrap'
//import '../css/Carousel.css';
import Banner from "./Banner"
import { baseDatosFB } from "./firebase/index"


const ItemListContainer = ({ greeting }) => {

    /* estado de los productos a mostrar que inicia vacío */
    const [productos, setProductos] = useState([])
    /* estado para mostrar el loading */
    const [estado, setEstado] = useState("pendiente");
    /* parametro que recibe al renderizar el contenido */
    const params = useParams()

    

    useEffect(() => {
        //Referencia a la DB
        const db = baseDatosFB
        //Referencia a una coleccion
        const collection = db.collection("productos")

        if (params.prod_id) {
            const filtro = collection.where("categoria", "==", params.prod_id)
            const query = filtro.get()
            //console.log(query)
            query.then((resultados) => {
               // console.log(resultados)
                const resultados_parseado = []
                //Recorro cada uno de los documentos
                resultados.forEach((documento) => {
                    //el id esta separado del resto de la data
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
                console.log(error);
                console.log("Error al cargar los productos, intentá nuevamente");
            }).finally(() => {
                setEstado("terminado");
            });

        } else {
            //Este es mi query
            const query = collection.get()
           // console.log(query)
            query.then((resultados) => {
                //console.log(resultados)
                const resultados_parseado = []
                //Recorro cada uno de los documentos
                resultados.forEach((documento) => {
                    //el id esta separado del resto de la data
                    const id = documento.id
                    const data = documento.data()
                    const data_final = { id, ...data }
                    resultados_parseado.push(data_final)
                })
                setProductos(resultados_parseado)
            }).catch((error) => {
                console.log(error);
                console.log("Error al cargar los productos, intentá nuevamente");
            }).finally(() => {
                setEstado("terminado");
            });

        }


    }, [params])
    if (estado === "pendiente") {
        return (
            
            <div className="loader">
               
                
               <img   src={"/images/loader.gif"} alt="loader" />
                </div>
            
        )
    } else {

        return (
           
            <div className="banner">
                <Banner/>
                <article class="col-8 mx-auto">
                <h2 class="titulo-crear pb-3 border-bottom text-center pt-5 mx-auto text-uppercase">ÚLTIMOS PRODUCTOS</h2>
                </article>
                 <article class="d-flex justify-content-end">
                <ButtonGroup variant="dark">
                <DropdownButton as={ButtonGroup} title="Categorías" variant="dark" id="bg-nested-dropdown" className="boton mt-4">
                <LinkContainer to="/category/1"><Dropdown.Item eventKey="1">Masculino</Dropdown.Item></LinkContainer>
                <LinkContainer to="/category/2"><Dropdown.Item eventKey="2">Femenino</Dropdown.Item></LinkContainer>
                 </DropdownButton>
                </ButtonGroup>
                </article>
                <ItemList productos={productos} />
                <Footer />
            </div>
        )
    }

}
export default ItemListContainer