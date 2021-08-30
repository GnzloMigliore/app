
const DetalleCompra = ({prods}) => {

    const subtotal = prods.cantidad * prods.precio;
    return(
        <div className="desglose"><span>{prods.titulo}.</span>- Cantidad: {prods.cantidad}. - Precio unitario: ${prods.precio}. - Subtotal: {subtotal}.</div>
        )
}
export default DetalleCompra;