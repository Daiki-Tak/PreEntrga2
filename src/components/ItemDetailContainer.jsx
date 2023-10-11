import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { BeatLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const singleProduct = doc(db, 'productos', `${id}`)
        getDoc(singleProduct).then((snapshot) => {
            const docs = snapshot.data()
            const docId = snapshot.id
            setProduct({ ...docs, id: docId })
        })
    }, [])

    return (
        <>
            {
                Object.keys(product).length === 0 ?
                    <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: '48px' }}>
                        <BeatLoader size={16} color='gray' />
                    </div>
                    : <Flex justifyContent='center' gap='2' wrap='wrap'>
                        <ItemDetail product={product} key={product.id} />
                    </Flex>
            }
        </>
    )
}

export default ItemDetailContainer