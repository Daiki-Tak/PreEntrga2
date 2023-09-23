import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/layout'
import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

const ItemDetail = ({ product }) => {

  const [cantidad, setCantidad] = useState(1)

  const addCantidad = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1)
    }
  }
  const subCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }
  const onAdd = () => {
    if (cantidad > 0) {
      if (cantidad === 1) { alert('1 unidad agregada al carrito.') }
      else { alert(`${cantidad} unidades agregadas al carrito.`) }
    }
  }

  return (
    <Card maxW='lg'>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
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
        <Flex alignItems='center' justifyContent='center'>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='green' onClick={addCantidad}>
              +
            </Button>
            <Text align='center'>{cantidad}</Text>
            <Button variant='solid' colorScheme='red' onClick={subCantidad}>
              -
            </Button>
            <Button variant='ghost' colorScheme='blue' onClick={onAdd}>
              Add to cart
            </Button>
          </ButtonGroup>
        </Flex>
      </CardFooter>
    </Card>
  )
}

export default ItemDetail