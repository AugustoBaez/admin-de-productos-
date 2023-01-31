import React from 'react'
import axios from 'axios';
// export default props => {
//     console.log(props.productos.product);
//     return (
//         <div>
//             {/* {props.productos.product.map((producto, idx) => {
//                 <p key={idx}>{producto.title}</p>
//             })} */}
//         </div>
//     )
// }

export default props => {
    // console.log(props.productos.product);
    let data = props.productos.product
    console.log(data)
    return (
        <div>
            {/* {data.map((datos) => {
                <p>{datos.title}</p>
            })} */}
            {/* {data.map((product, idx) => {
                return <p key={idx}>{product.title}, {product.price} {product.description}</p>
            })} */}
            {/* <p>{props.productos.product.title}</p> */}
        </div>
    )
}