import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AddProduct from './AddProduct'
import CartProduct from './CartProduct'
import ListGroup from 'react-bootstrap/ListGroup';
import {usePro} from '../../Context/ProductContext'
import { useNavigate } from "react-router-dom";

const CatalogProduct = () => {
  const {navigate} = useNavigate
  const {catalogProduct} = usePro();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
        try {
          await catalogProduct()
          navigate(`/List Product`, { replace: true })
        } catch (error) {
          console.error("Error fetching data product : ", error)
        }
    };
    fetchData();
  }, []);


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={AddProduct}>Add Produk</Nav.Link>
            <Nav.Link href={CartProduct}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ListGroup horizontal>
      <ListGroup.Item>{product.name}</ListGroup.Item>
      <ListGroup.Item>{product.price}</ListGroup.Item>
      <ListGroup.Item>{product.image}</ListGroup.Item>
    </ListGroup>
    
    </>




    // <div>
    //   <h1>Product List</h1>
    //   <ul>
    //     {product.map(product=>(
    //         <li key={product.id}>
    //             Nama Produk : {product.name}, Harga produk : ${product.price}, Gambar produk : {product.image}
    //         </li>
    //     ))}
        
    //   </ul>
    // </div>
  )
}

export default CatalogProduct
