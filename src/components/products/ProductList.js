import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider"

export const ProductList = () => {
    const {products, getProducts} = useContext(ProductContext)
    const {productTypes, getProductTypes} = useContext(ProductTypeContext)

    useEffect(()=>{
        getProductTypes()
        .then(getProducts)
    }, [])

    return (
        <div className="products">
            {
                products.map(pro => {
                    const type = productTypes.find(item => item.id === pro.productTypeId)
                    return <Product key={pro.id} product={pro} type={type}/>
            })
            }
        </div>
    )
}