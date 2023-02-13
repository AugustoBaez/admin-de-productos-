import React, { useState, useEffect } from 'react'
import axios from "axios"
import ProductList from './ProductList'
const Form = ({ initialTitle, initialPrice, initialDescription, handleSubmit }) => {
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/new", {
            title,
            price,
            description
        }).then((res) => {
            setTitle(...title)
            setPrice(...price)
            setDescription(...description)
            console.log(res, "succesful")
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
            <ProductList />
        </div>
    )
}

export default Form