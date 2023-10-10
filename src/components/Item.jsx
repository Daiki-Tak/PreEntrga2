import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ img, name, id }) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src={img}
                    alt={name}
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