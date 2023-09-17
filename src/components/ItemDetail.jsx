import { Center, Heading, Text } from '@chakra-ui/layout'
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/button'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ItemDetail = ({ productos }) => {

  const { id } = useParams()
  useEffect(() => {
    return () => {}
  }, [id])

  return (
    <>
    </>
  )
}

export default ItemDetail