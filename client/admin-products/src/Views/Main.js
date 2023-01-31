import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import Form from '../components/Form';
import axios from 'axios';
export default () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProductos(res.data);
            });
    }, [])
    return (
        <div>
            <Form />
            <hr />
            {productos && <ProductList productos={productos} />}
        </div>
    )
}

