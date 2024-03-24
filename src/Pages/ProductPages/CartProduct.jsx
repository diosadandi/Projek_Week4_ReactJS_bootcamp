import React, {useEffect, useState, useNavigate} from 'react'
import { usePro } from '../../Context/ProductContext'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import AddProduct from './AddProduct'
import CatalogProduct from './CatalogProduct';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

const CartProduct = () => {
    const {navigate} = useNavigate
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            try {
              const response = await axios.get('https://fakestoreapi.com/carts')
              setProduct(response.data.data)
              navigate(`/cart`, { replace: true })
            } catch (error) {
              console.error("Error fetching data product : ", error.response.data)
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
            <Nav.Link href={CatalogProduct}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.image}</td>
        </tr>
      </tbody>
    </Table>

    <h1>Total price : {product.price += product.price}</h1>
    
    </>
  )
}

export default CartProduct
