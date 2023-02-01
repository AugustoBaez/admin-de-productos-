import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from 'react-router-dom'
const Update = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setPrice(res.data.creador)
            setDescription(res.data.rating)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title,
            price,
            description
        }).then((res) => {
            console.log(res, "succesful")
            navigate("/")
        }).catch((error) => {
            console.log(error, "error haciendo post")
        })
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)}></input>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default Update