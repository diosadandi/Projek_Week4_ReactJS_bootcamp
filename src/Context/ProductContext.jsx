import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

// context product
const proContext = createContext()
export const usePro = () => useContext(proContext)

export const ProductProvider = ({children}) => {

    const [product, setProduct] = useState(null)

    //function add product
    const addProduct = async (name, price, image) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/products', {name, price, image})
            setProduct(response.data)
            localStorage.setItem("product", JSON.stringify(response.data));
        } catch (error) {
            console.error("Fail to add new product:", error);
        }
    }

    const CatalogProduct = async () => {
        useEffect(() => {
            const fetchCatalogProduct = async () =>{
                try {
                    const response = await axios.get('https://fakestoreapi.com/products')
                    console.log("List of catalog Produtcs : ", response.data.data)
                    setProduct(response.data.data)
                } catch (error) {
                    console.error("Error fetching data product : ", error.response.data)
                }

            }
            fetchCatalogProduct()
        },[])
    }

    const CartProduct = () => {
        useEffect(() => {
            const fetchCartData = async () => {
                try {
                    const response = await axios.get('https://fakestoreapi.com/carts')
                    console.log("List of cart Produtcs : ", response.data.data)
                    setProduct(response.data.data)
                } catch (error) {
                    console.error("fail to fetch data cart : ", error.response.data)
                }
            }
            fetchCartData();
        },[])
    }


    
    //memeriksa apakah pengguna sudah tambah produk dari local storage saat komponen dimuat
    useEffect(() => {
        const storedProduct = localStorage.getItem("product");
        if(storedProduct){
            setProduct(JSON.parse(storedProduct))
        }
    }, []);

    return (
    <proContext.Provider value={{product, addProduct, CatalogProduct, CartProduct}}>
        {children}
    </proContext.Provider>
    )
}





