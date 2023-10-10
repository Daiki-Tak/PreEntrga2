import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = ({ }) => {
    const { id } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, 'productos')
        getDocs(productsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            setProducts(docs)
        })
    }, [])
    

    const filteredProducts = products.filter(x => !id || x.category === id);

    return (
       <>
            <ItemList products={filteredProducts} />
       </>
    )
}

export default ItemListContainer