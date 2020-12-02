import React, {useState} from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/producttypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    return (
        <ProductTypeContext.Provider value={
            {
                productTypes, getProductTypes
            }
        }>
            {props.children}
        </ProductTypeContext.Provider>
    )
}