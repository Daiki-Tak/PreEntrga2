import React from "react"
import Item from "./Item"
import { Flex } from "@chakra-ui/react"

const ItemList = ({ products }) => {
  return (
    <Flex justifyContent='center' gap='2' wrap='wrap'>
        {
            products.map((p) => {
                return(
                    <Item 
                        name={p.name} 
                        price={p.price}
                        img={p.img}
                        key={p.id}
                        id={p.id}
                    />
                )
            })
        }

    </Flex>
  )
}

export default React.memo(ItemList)