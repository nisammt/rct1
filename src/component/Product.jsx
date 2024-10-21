import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../component/Product.css'
function Product()
{
    return(
        <main>
          <Container>
            <Row>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3} className="item-card">
           <Card>
      <Card.Img variant="top"className="card-image" src="https://media.istockphoto.com/id/1193373535/photo/headphones-realistic-3d-render-music-lover-minimalistic-background-with-blue-white-and-golden.jpg?s=2048x2048&w=is&k=20&c=l2A7V5IrxNy3SfW38CcHRgwoUWb55YOhXHivFojDFvo="/>
      <Card.Body>
        <Card.Title>Headphone</Card.Title>
        <Card.Text>
          <p>$ :33.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3} className="item-card">
           <Card>
      <Card.Img variant="top"className="card-image" src="https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg"/>
      <Card.Body>
        <Card.Title>Speaker</Card.Title>
        <Card.Text>
          <p>$ :19.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3} className="item-card">
           <Card>
      <Card.Img variant="top"className="card-image" src="https://cdn.pixabay.com/photo/2013/07/12/18/58/laptop-154091_1280.png"/>
      <Card.Body>
        <Card.Title>Laptop</Card.Title>
        <Card.Text>
          <p>$ :149.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card" >
           <Card>
      <Card.Img variant="top"className="card-image" src="https://cdn.pixabay.com/photo/2013/07/12/19/16/hdd-154463_1280.png"/>
      <Card.Body>
        <Card.Title>Hard Disk</Card.Title>
        <Card.Text>
          <p>$ :140.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card">
           <Card>
      <Card.Img variant="top"className="card-image" src="https://cdn.pixabay.com/photo/2021/07/15/10/15/monitor-6468035_1280.png"/>
      <Card.Body>
        <Card.Title>Monitor</Card.Title>
        <Card.Text>
          <p>$ :33.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card" >
           <Card>
      <Card.Img variant="top" className="card-image" src="https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851_1280.jpg"/>
      <Card.Body>
        <Card.Title>Combo Kit</Card.Title>
        <Card.Text>
          <p>$ :140.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card">
           <Card>
      <Card.Img variant="top" className="card-image" src="https://media.istockphoto.com/id/96706405/photo/backpack-with-a-laptop-inside-isolated.jpg?s=2048x2048&w=is&k=20&c=Hju-GXIiZdu0AZ5wM9CkHqk4AB0TGr021DOhSPpK-RM="/>
      <Card.Body>
        <Card.Title>Laptop Bag</Card.Title>
        <Card.Text>
          <p>$ :14.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3} className="item-card" >
           <Card>
      <Card.Img variant="top" className="card-image" src="https://media.istockphoto.com/id/153065264/photo/computer-keyboard-with-clipping-path.jpg?s=2048x2048&w=is&k=20&c=fupVNsbHkh_M9tu5pJvWH05Biymi0jhBADR7waWKo5w="/>
      <Card.Body>
        <Card.Title>keyboard</Card.Title>
        <Card.Text>
          <p>$ :14.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card" >
           <Card >
      <Card.Img variant="top"className="card-image"  src="https://cdn.pixabay.com/photo/2013/07/12/17/41/computer-mouse-152249_1280.png"/>
      <Card.Body>
        <Card.Title>Mouse</Card.Title>
        <Card.Text>
          <p>$ :8.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} sm={4} md={4} lg={3} xl={3} xxl={3}  className="item-card" >
           <Card>
      <Card.Img variant="top" className="card-image" src="https://cdn.pixabay.com/photo/2014/03/24/17/07/flash-drive-295105_1280.png"/>
      <Card.Body>
        <Card.Title>Pendrive</Card.Title>
        <Card.Text>
          <p>$ :7.00</p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="cart">Go Details</Button>
        <Button variant="success" className="cart">Add to Cart</Button>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    </Container>
        </main>
    )
}
export default Product