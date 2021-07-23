const itemListContainer = (props) => {

const nombre = props.nombre
const edad = props.edad
return(
<p className="text-center mt-5">
    Mi nombre es {nombre} y tengo {edad} años.
</p>
)}
export default itemListContainer;