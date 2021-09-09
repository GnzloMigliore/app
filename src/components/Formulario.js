
import { useState } from "react";
//import { baseDatosFB } from "./firebase/index"
import '../css/Form.css';



const Formulario = ({ onSubmit, LastOrder, isLoading }) => {

    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [phone, setDireccion] = useState('')
    const [email, setPhone] = useState('')
    const [direccion, setEmail] = useState('')

    //const ordenDeCompra = baseDatosFB.collection("ordenesDeCompra");
  

    const inputHandler = (e) => {
         console.log(e.target.value);
        switch (e.target.name) {

            case 'name':
                setName(e.target.value)
                break;
                case 'apellido':
                    setApellido(e.target.value)
                    break;
            case 'phone':
                setPhone(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
                case 'direccion':
                    setDireccion(e.target.value)
                    break;
            default:
                break;
        }
    }


    return (
        <div className="formulario">

            <h2> Finaliza tu compra </h2>
            <form onSubmit={(e) => onSubmit(e, { name: name, apellido:apellido , phone: phone, email: email, direccion: direccion })}>

                <div className="mb-6">
                    <div className="mb-2">
                        <label className="block text-gray-300">Nombre</label>
                        <input type="text" name="name" onChange={inputHandler}
                            className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-300">Apellido</label>
                        <input type="text" name="apellido" onChange={inputHandler}
                            className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-300">Telefono</label>
                        <input type="text" name="phone" onChange={inputHandler}
                            className="form-control" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Email</label>
                        <input type="email" name="email" onChange={inputHandler}
                            className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-300">Dirección</label>
                        <input type="text" name="direccion" onChange={inputHandler}
                            className="form-control" />
                    </div>

                    {LastOrder &&
                        <p className="mt-2 text-center">
                            Confirmamos tu compra con el siguiente Nro de orden:
                            <code className="block bg-white bg-opacity-20 px-2">
                                {LastOrder}
                            </code>
                        </p>}
                </div>

                {!isLoading &&
                    <button className="btn btn-dark"
                        type="submit">Finalizar compra</button>
                }

                {isLoading &&
                    <button className="bg-yellow-400 active:bg-green-500 rounded px-3 py-1"
                        type="button" disabled>
                        <span className="loader"></span>
                    </button>
                }

            </form>


        </div>
          
    )
}

export default Formulario
