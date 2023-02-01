import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' //usa el latest router para funcionar
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Product = () => {
    const { id } = useParams() //con params trae el id de la uri
    const [specProduct, setSpecProduct] = useState([])
    const [prodTitle, setProdTitle] = useState("")
    const [prodPrice, setProdPrice] = useState()
    const [prodDesc, setProdDesc] = useState([])
    const navigate = useNavigate()

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

    console.log(specProduct)

    const deleteProduct = async () => {
         try {
                const result = await axios.delete(`http://localhost:8000/api/products/${id}`) //se pone el id del useparams aca para hacer fetch de esa id
                .then((res) => {
                    navigate("/")
                })

            } catch (error) {
                console.log(error)
            }
    }

    return (
        <div>
            <h2>{prodTitle}</h2>
            <h3>Price: ${prodPrice}</h3>
            <h3>{prodDesc}</h3>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default Product