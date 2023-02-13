import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' //usa el latest router para funcionar
import axios from "axios"
import DeleteBtn from './DeleteBtn'

const Product = () => {
    const { id } = useParams() //con params trae el id de la uri
    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState()
    const [prodDesc, setProdDesc] = useState([])

    useEffect(() => {
        const getProducto = async () => {
            try {
                const result = await axios.get(`http://localhost:8000/api/products/${id}`) //se pone el id del useparams aca para hacer fetch de esa id
                setProdTitle(result.data.product.map((prod) => prod.title))
                setProdPrice(result.data.product.map((prod) => prod.price))
                setProdDesc(result.data.product.map((prod) => prod.description))

            } catch (error) {
                console.log(error)
            }
        }
        getProducto()
    }, []);

    return (
        <div>
            <h2>{prodTitle}</h2>
            <h3>Price: ${prodPrice}</h3>
            <h3>Description: {prodDesc}</h3>
            <DeleteBtn />
            <button>
                <a href={`/update/${id}`}>
                    Update
                </a>
            </button>
        </div>
    )
}

export default Product