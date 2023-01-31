import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.match.params.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>First Name: {product.title}</p>
            <p>Last Name: {product.description}</p>
        </div>
    )
}

