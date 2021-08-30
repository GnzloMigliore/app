import  { Button }  from  'react-bootstrap' ;
import { useState } from "react";
const Form = ({ OnSubmit, LastOrder, isLoading }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

console.log(name);


    const inputHandler = (e) => {

        switch (e.target.name) {

            case 'name':
                setName(e.target.value)
                break;
            case 'phone':
                setPhone(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            default:
                break;
        }
    }


    return (

        <div>

                  <h2 className="text-center mt-4"> Finaliza tu compra </h2>
                  <form onSubmit={(e) => OnSubmit(e, { name: name, phone: phone, email: email })}>

                    <div className="mb-6">
                    <div className="mb-2">
                        <label className="block text-gray-300">Nombre</label>
                        <input type="text" name="name"  className="formname" onChange={inputHandler}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Teléfono</label>
                        <input type="text" name="phone" className="formname" onChange={inputHandler}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-gray-300">Email</label>
                        <input type="email" name="email"  className="formemail" onChange={inputHandler}
                        />
                    </div>

                    {LastOrder &&
                        <p className="mt-2 text-center">
                            Confirmamos tu compra con el siguiente Nro de orden:
                            <code >
                                {LastOrder}
                            </code>
                        </p>}
                </div>

                {!isLoading &&
                 
                    <Button type="submit" variant="dark" className="mt-5 mb-2 finalizar" id="botonCheckout"  href="">FINALIZAR COMPRA</Button>
                }

                {isLoading &&
                    <button className="bg-yellow-400 active:bg-green-500 rounded px-3 py-1"
                        type="button" >
                        <span className="loader"></span>
                    </button>
                }

            </form>


        </div>

    )
}

export default Form
