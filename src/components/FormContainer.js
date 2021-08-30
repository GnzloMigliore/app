
import { useState } from 'react'
import { baseDatosFB, getTimestamp } from './firebase/index'
import Form from './Formulario'

const OrderContainer = ({ cart }) => {
    const [LastOrder, setLastOrder] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (e, buyer) => {
        e.preventDefault()
        setIsLoading(true)

        const newOrder = {
            buyer: buyer,
            items: cart,
            date: getTimestamp(),
            total: cart.map((item) => item.price).reduce((prev, curr) => prev + curr)
        }
         console.log(newOrder);
        baseDatosFB().collection('detallesComprador').add(newOrder).then(({ id }) => {
            setLastOrder(id)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <Form onSubmit={onSubmit} LastOrder={LastOrder} isLoading={isLoading} />
    )
}

export default OrderContainer