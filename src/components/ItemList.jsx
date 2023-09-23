import Item from "./Item"
import { Flex } from "@chakra-ui/react"

const ItemList = ({ productos }) => {
  return (
    <Flex justifyContent='center' gap='2' wrap='wrap'>
        {
            productos.map((p) => {
                return(
                    <Item 
                        name={p.name} 
                        price={p.price}
                        stock={p.stock}
                        key={p.id}
                        id={p.id}
                    />
                )
            })
        }

    </Flex>
  )
}

export default ItemList