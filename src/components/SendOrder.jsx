import { collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Flex, Center, Heading } from '@chakra-ui/layout'
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

    // const sent = orderId ? true : false

    return (
        <>

            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
                <input type='tel' placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
                <button type="submit">Confirm Order</button>
            </form> */}
            {orderId ?
                <>
                    <Flex p={'16'} direction='column-reverse' justify={'center'} align={'center'}>
                        <Heading size='xl'>
                            The order has been submitted. Your order ID: {orderId}
                        </Heading>
                        <br/>
                        <Heading size='xl'>
                            Thank you for your purchase!
                        </Heading>
                    </Flex>
                    <Center>
                        <Link to='/'>
                            <Button size='lg' onClick={clearCart}>
                                Return to store
                            </Button>
                        </Link>
                    </Center>
                </>
                :
                <Flex minWidth={'80rem'} direction='column-reverse' justify={'center'} align={'center'}>
                    <form onSubmit={handleSubmit} style={{minWidth:'50rem'}}>
                        <FormControl isRequired margin={'4'}>
                            <FormLabel margin={'1'}>Full Name</FormLabel>
                            <Input type='text' placeholder="John Doe" margin={'1'} onChange={(e) => setName(e.target.value)} />
                            <FormLabel margin={'1'}>Email address</FormLabel>
                            <Input type='email' placeholder="foo@bar.com" margin={'1'} onChange={(e) => setEmail(e.target.value)} />
                            <FormLabel margin={'1'}>Phone Number</FormLabel>
                            <Input type='text' placeholder="+1-202-555-0195" margin={'1'} onChange={(e) => setPhone(e.target.value)} />
                            <Button colorScheme='green' type='submit' marginTop={'3'} marginLeft={'1'}>Confirm Order</Button>
                        </FormControl>
                    </form>
                </Flex>
            }
        </>
    )
}

export default SendOrder