import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const DeleteBtn = ({id, productos, setProductos}) => {
    const navigate = useNavigate()

    const deleteProduct = async () => {
        try {
            const result = await axios.delete(`http://localhost:8000/api/products/${id}`) //se pone el id del useparams aca para hacer fetch de esa id
                .then((res) => {
                     setProductos(productos.filter(prod => prod._id !== id))
                    navigate("/")
                })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={deleteProduct}>Delete</button>
        </>

    )
}

export default DeleteBtn