  
import { useState,useEffect } from "react";
import { Provider } from "../context/CartContext";

const CartProvider = ({ defaultState = [],children}) => {
    const [precioTotal, setPrecioTotal] = useState(0);
    const [carrito, setCarrito] = useState(defaultState);
    const [cartelAviso, setCartelAviso] = useState("");

    useEffect( () => {
        const total = Object.values(carrito).reduce( (acumulador, {cantidad, price}) => acumulador + cantidad * price, 0);
        setPrecioTotal(total);
    }, [carrito, precioTotal]);


    function agregarAlCarrito (prod, cant) {
        const yaExiste = carrito.find( (item) => item.id === prod.id);
        if (!yaExiste) {
            setCarrito([...carrito, {...prod, cantidad: cant}]);
        } else {
            const newProductos = carrito.map ( (item) => {
                if (item.id === prod.id) {
                    return {...item, cantidad: cant, } 
                } return item;
            });
            setCarrito(newProductos);
        }
    }

    function borrarDelCarrito (nombre, id) {
        const borrar = carrito.filter( (item) => item.id !== id);
        setCarrito(borrar);
        setCartelAviso( `${nombre} se borró del carrito`);
        setTimeout( () => {setCartelAviso("")}, 2000);
    }

    function vaciarCarrito () {
        setCarrito(defaultState);
    }

    return (
    <Provider value={{carrito, setCarrito, agregarAlCarrito, borrarDelCarrito, vaciarCarrito,precioTotal,cartelAviso}}>
        {children}
    </Provider>
    );
}

export default CartProvider;