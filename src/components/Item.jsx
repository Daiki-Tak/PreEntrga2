import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, id }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{name}</Heading>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to={`/item/${id}`}>
                        <Button variant='solid' colorScheme='blue'>
                            Details
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default Item