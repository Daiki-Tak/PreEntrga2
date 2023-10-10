import { Badge, Center, Flex, Icon } from "@chakra-ui/react"
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { productsQuantity } = useContext(CartContext)
  return (
    <Flex>
      <Center>
          <Icon as={BsCart2} fontSize={'1.5rem'} />
          {productsQuantity() > 0 &&
            <Badge colorScheme="purple">{productsQuantity()}</Badge>}
      </Center>
    </Flex>
  )
}

export default CartWidget