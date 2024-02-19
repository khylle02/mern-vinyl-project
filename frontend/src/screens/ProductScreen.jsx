import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import Rating from "../components/Rating";
import React from 'react'


const products = [
    {
      _id: '1',
      name: 'ALL TIME LOW Don’t Panic: It’s Longer Now Orange Vinyl',
      image: '/images/ALL-TIME-LOW-Dont-Panic-Its-Longer-Now-Orange-Vinyl.webp',
      description:
        'This is a legit, original, officially licensed merchandise All Time Low purchased directly from the band’s record label, online store, or licensed distributor.',
      brand: 'Hopeless Records',
      category: 'Pop-Punk',
      price: 595.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '2',
      name: 'ALL TIME LOW Last Young Renegade (Young Renegades Version) Teal Vinyl',
      image: '/images/ALL-TIME-LOW-Last-Young-Renegade-Alternate-Cover-Teal-Vinyl.webp',
      description:
        'This is a legit, original, officially licensed merchandise All Time Low purchased directly from the band’s record label, online store, or licensed distributor.',
      brand: 'Hopeless Records',
      category: 'Pop-Punk',
      price: 895.00,
      countInStock: 0,
      rating: 5,
      numReviews: 12,
    }
  ];

const ProductScreen = () => {
    const { id: productId} = useParams();
    const product = products.find((p) => p._id === productId);
    console.log(product);
    return <>
        <Link className="btn btn-light my-3" to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant="flush" >
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>₱{product.price}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button"
                            disabled={product.countInStock === 0}
                            >Add To Cart </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
}

export default ProductScreen
