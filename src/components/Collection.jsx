import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Collection = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, 'productos')
        getDocs(productsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc)=>doc.data())
            setProducts(docs)
        })
    }, [])

    return (
        <>
        {
            products.length && products.map((p) => {
                return(
                    <div key={p.id}>
                        <h2>{p.name}</h2>
                        <p>{p.price}</p>
                        <p>{p.stock}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default Collection