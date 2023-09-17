import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const productos = [
            { id: 1, name: "Product A", description: "Product A description", price: 1000, category: "Items" },
            { id: 2, name: "Product B", description: "Product B description", price: 2000, category: "Medicine" },
            { id: 3, name: "Product C", description: "Product C description", price: 3000, category: "TMs & HMs" },
            { id: 4, name: "Product D", description: "Product D description", price: 2000, category: "Berries" },
            { id: 5, name: "Product E", description: "Product E description", price: 1000, category: "Key Items" }
        ]

        const mostrarProductos = new Promise((resolve, reject) => {
            if (productos.length > 0) {
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            } else {
                reject('No se pueden mostrar los productos')
            }
        })
    
        mostrarProductos
            .then((resultado) => {
                setProductos(resultado)
            })
    }, [id])


    return (
        <>
            <ItemDetail productos={productos} />
        </>
    )
}

export default ItemDetailContainer