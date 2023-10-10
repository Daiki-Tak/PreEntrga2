import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button, Heading, Box, Flex, Spacer, Center } from '@chakra-ui/react'
import CartItem from './CartItem'

const Cart = () => {
    const { cart, clearCart, totalCartPrice } = useContext(CartContext)
    return (
        <>
            {cart.length ?
                <>
                    <Flex bg={'blackAlpha.200'}>
                        <Spacer />
                        <Box width={'10rem'}>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading size='sm'>Product</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading size='sm'>Price per Unit</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading size='sm'>Quantity</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Heading size='sm'>Subtotal</Heading>
                        </Box>
                        <Spacer />
                        <Box width={'24px'}>
                        </Box>
                        <Spacer />
                    </Flex>
                    <>
                        {cart.map((product) => {
                            return (
                                <CartItem key={product.id} product={product} />
                            )
                        })}
                    </>
                    <Center>
                        <Heading size='md'>Total: ${totalCartPrice()}</Heading>
                    </Center>
                    <Center>
                        <Button colorScheme='red' onClick={clearCart}>Clear cart</Button>
                        <Link to='/order'>
                            <Button colorScheme='green'>Finish purchase</Button>
                        </Link>
                    </Center>
                </>
                :
                <>
                    <Center p={'16'}>
                        <Heading size='xl'>
                            Your cart is empty!
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

export default Cart