import { useState } from 'react'
import { baseDatosFB, getTimestamp } from './firebase/index'
import Formulario from './Formulario'

const FormContainer = ({ cart }) => {
    console.log(cart);
    const [LastOrder, setLastOrder] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (e, buyer) => {
        console.log(buyer);
        e.preventDefault()
        setIsLoading(true)

        const newOrder = {
            buyer: buyer,
            items: cart,
            date: getTimestamp(),
            total:  cart.map((item) => item.price).reduce((prev, curr) => prev + curr)
        }

     const Collection = baseDatosFB.collection('orders');
     //console.log(Collection);
        Collection.add(newOrder).then(({ id }) => {
            setLastOrder(id)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <div>
        <Formulario onSubmit={onSubmit} LastOrder={LastOrder} isLoading={isLoading} />
        </div>
    )
}

export default FormContainer;