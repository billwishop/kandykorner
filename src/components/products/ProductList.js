import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)

    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(pro => <Product key={pro.id} product={pro} />)
            }
        </div>
    )
}