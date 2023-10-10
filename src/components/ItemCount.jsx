import { ButtonGroup, Button, IconButton } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { useState } from "react"

const ItemCount = ({ onAdd }) => {
    const [counter, setCounter] = useState(1)

    const increase = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }
    const decrease = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    const wrapOnAdd = () => {
        onAdd(counter)
    }

    return (
        <>
            <ButtonGroup size='md' isAttached variant='outline'>
                <IconButton onClick={decrease} icon={<MinusIcon />} />
                <Button>{counter}</Button>
                <IconButton onClick={increase} icon={<AddIcon />} />
            </ButtonGroup>
            <Button onClick={wrapOnAdd}>Add to cart</Button>
        </>
    )
}

export default ItemCount