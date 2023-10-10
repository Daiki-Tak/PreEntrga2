import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/layout'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState('')
  const { addToCart } = useContext(CartContext)

  const onAdd = (quantity) => {
    setQuantityAdded(quantity)
    addToCart(product, quantity)
  }

  return (
    <Card maxW='lg' marginTop={'24'}>
      <CardBody>
        <Image
          src={product.img}
          alt={product.name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='lg'>{product.name}</Heading>
          <Text>{product.description}</Text>
          <Text color='blue.600' fontSize='2xl'>${product.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {quantityAdded === '' ?
          <ItemCount onAdd={onAdd} />
          : <Link to='/cart'>
            <Button>Go to my Cart</Button>
          </Link>}
      </CardFooter>
    </Card>
  )
}

export default ItemDetail