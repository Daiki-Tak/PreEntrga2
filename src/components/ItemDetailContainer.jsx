import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { Flex } from "@chakra-ui/react";

const ItemDetailContainer = () => {
    const { id } = useParams();

    const productos = [
        { id: 1, name: "Product A", description: "Product A description", price: 1000, stock: 10, category: "Items" },
        { id: 2, name: "Product B", description: "Product B description", price: 2000, stock: 7, category: "Medicine" },
        { id: 3, name: "Product C", description: "Product C description", price: 3000, stock: 8, category: "TMs & HMs" },
        { id: 4, name: "Product D", description: "Product D description", price: 2000, stock: 4, category: "Berries" },
        { id: 5, name: "Product E", description: "Product E description", price: 1000, stock: 15, category: "Key Items" }
    ]

    const filteredProducts = productos.filter(x => !id || x.id === parseInt(id));

    const mostrarProductos = new Promise((resolve, reject) => {
        if (filteredProducts.length > 0) {
            setTimeout(() => {
                resolve(filteredProducts)
            }, 5000)
        } else {
            reject('No se pueden mostrar los productos')
        }
    })

    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <Flex justifyContent='center' gap='2' wrap='wrap'>
            {filteredProducts.map((p) => {
                return (<ItemDetail product={p} key={p.id}/>)
            })}
        </Flex>
    )
}

export default ItemDetailContainer