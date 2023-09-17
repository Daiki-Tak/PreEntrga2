import ItemList from './ItemList'

const ItemListContainer = ({ }) => {
    const productos = [
        { id: 1, name: "Product A", price: 1000, category: "Items" },
        { id: 2, name: "Product B", price: 2000, category: "Medicine" },
        { id: 3, name: "Product C", price: 3000, category: "TMs & HMs" },
        { id: 4, name: "Product D", price: 2000, category: "Berries" },
        { id: 5, name: "Product E", price: 1000, category: "Key Items" }
    ]

    const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
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
       <>
            <ItemList productos={productos} />
       </>
    )
}

export default ItemListContainer