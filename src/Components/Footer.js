import {Container, Row, Col, Button, InputGroup, FormControl} from 'react-bootstrap';
import {CustomLogo} from './CustomLogo';
import '../CSS/Footer.css'

function Footer() {
  return (
    <>
        <Container fluid className="d-none d-lg-block">
            <Row className="mainFooter">
                <Col lg={5} className="footerleft">
                    <img src="./Images/elemeslogo.png"/>
                    <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                        Kecamatan Setiabudi, Kota Jakarta Selatan,
                        Daerah Khusus Ibukota Jakarta 12950
                    </p>
                    <CustomLogo />
                </Col>

                <Col lg={2}>
                    <h6>Categories</h6>
                    <ul>
                        <li><a href="#">Cupcake</a></li>
                        <li><a href="#">Pizza</a></li>
                        <li><a href="#">Kebab</a></li>
                        <li><a href="#">Salmon</a></li>
                        <li><a href="#">Doughnut</a></li>
                    </ul>
                </Col>

                <Col lg={2}>
                    <h6>About us</h6>
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Report Problem</a></li>
                    </ul>
                </Col>

                <Col lg={3} className="footerRight">
                    <h6>Newsletter</h6>
                    <p>Get now free 50% discount for all products on your first order</p>
                    <InputGroup className="emailInput">
                        <FormControl
                        placeholder="Your Email Address"
                        />
                        <Button >Send</Button>
                    </InputGroup>

                    <div className="newsContact">
                        <img src="./Images/mail.svg"/>
                        <p style={{color: "black"}}> elemesid@gmail.com </p>
                    </div>

                    <div className="newsContact">
                        <img src="./Images/call.svg"/>
                        <p style={{color: "black"}}>  0888 1111 2222 </p>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={12} className="copyright text-center">
                    <p>© 2021 Elemes id. All rights reserved</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer