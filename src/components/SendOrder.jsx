import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Center, Heading } from '@chakra-ui/layout'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const SendOrder = () => {
    const { cart, totalCartPrice, clearCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        buyer: { name, email, phone },
        total: totalCartPrice(),
        items: cart.map(({ id, name, price, quantity }) => { return ({ id, name, price, quantity }) }),
        date: serverTimestamp()
    }

    const orderCollection = collection(db, "orders")

    const sent = orderId ? true : false

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                <input type='tel' placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Confirm Order</button>
            </form>
            {sent &&
                <>
                    <Center p={'16'}>
                        <Heading size='xl'>
                            The order has been submitted. Your order ID: {orderId}</Heading>
                        <Heading size='xl'>
                            Thank you for your purchase!
                        </Heading>
                    </Center>
                    <Center>
                        <Link to='/'>
                            <Button size='lg'>
                                Return to store
                            </Button>
                        </Link>
                    </Center>
                </>
            }
        </>
    )
}

export default SendOrder