import Item from "./Item"

const ItemList = ({ productos }) => {
  return (
    <div>
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

    </div>
  )
}

export default ItemList