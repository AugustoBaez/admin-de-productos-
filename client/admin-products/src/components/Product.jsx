import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const Product = () => {
    const { id } = useParams()
    const [specProduct, setSpecProduct] = useState([])
    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState()
    const [prodDesc, setProdDesc] = useState([])

    useEffect(() => {
        const getProducto = async () => {
            try {
                const result = await axios.get(`http://localhost:8000/api/products/${id}`)
                setProdTitle(result.data.product.map((prod) => prod.title))
                setProdPrice(result.data.product.map((prod) => prod.price))
                setProdDesc(result.data.product.map((prod) => prod.description))

            } catch (error) {
                console.log(error)
            }
        }
        getProducto()
    }, []);

    console.log(specProduct)

    return (
        <div>
            <h2>{prodTitle}</h2>
            <h3>Price: ${prodPrice}</h3>
            <h3>{prodDesc}</h3>
            
        </div>
    )
}

export default Product