
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import {usePro} from '../../Context/ProductContext'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CatalogProduct from './CatalogProduct';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';



const AddProduct = () => {
  const { addProduct } = usePro();
  const [product, setProduct] = useState({
      name : "",
      price : "",
      image : ""
  });
  const navigate = useNavigate()
    
  const handleChange = (e) =>{
      const {name, value} = e.target;
      setProduct({...product, [name]:value})
  }

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await addProduct(product)
        navigate('./addProduct', {replace : true})
      } catch (error) {
          console.error("fail to add new product : ", error)
            
      }
  }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={CatalogProduct}>Add Produk</Nav.Link>
            <Nav.Link href={CartProduct}>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <h2>Form input Product</h2>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-name">Name of Product</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={product.name}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Price of Product
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={product.price}
        />
      </InputGroup>
      <br />
      <InputGroup className='mb-3'>
        <InputGroup.Text id="inputGroup-sizing-default">Insert image of the product</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleChange}
          value={product.image}
        />
      </InputGroup>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  )
}

export default AddProduct
