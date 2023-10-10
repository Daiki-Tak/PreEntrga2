import React from 'react'
import { Box, Flex, Heading, Img, Spacer, Icon, Button } from '@chakra-ui/react'
import { BsTrash } from 'react-icons/bs'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ product }) => {
    const { removeFromCart } = useContext(CartContext)
    return (
        <>
            <Flex alignItems='center'>
                <Spacer />
                <Box>
                    <Img src={product.img} alt={product.name} width={'6rem'} />
                </Box>
                <Spacer />
                <Box>
                    <Heading size='sm'>{product.name}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Heading size='sm'>${product.price}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Heading size='sm'>x{product.quantity}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Heading size='sm'>${product.price * product.quantity}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme='red'>
                        <Icon as={BsTrash} fontSize={'1.5rem'} onClick={() => removeFromCart(product.id)} />
                    </Button>
                </Box>
                <Spacer />
            </Flex>
        </>
    )
}

export default CartItem