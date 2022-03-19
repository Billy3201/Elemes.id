import {Container, Row, Col, Button, Card, Image} from 'react-bootstrap'
import Sliders from './Sliders';
import Star from './Star'
import Trending from "../Trending.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../CSS/Home.css'


const colors = ['#E6F3F5', '#E6F3F5', '#EAEEFA', '#F9EEF3', '#F0FEEB', '#F3F7D9', '#F3F7D9', '#EAEEFA'];

function Home() {
  return (
    <>
      <Container fluid className="mainContainer">
        <Row style={{
              display:"flex",
              alignItems: "center",
              marginBottom: "50px",
        }}
        >
          <h1 className="hiddenHeader .d-none .d-lg-block .d-xl-none">Good Food Us Good Mood</h1>
          <Col lg={{span: 6, order:1}} xs={{span: 12, order:2}} className="browserLeft">
            <h1 className="d-none d-lg-block">Good Food Us Good Mood</h1>
            <p>I would think that conserving our natural resources should be a conservative position: Not to waste food, 
              and not to throw away a lot of the food that we buy.
            </p>
            <Button className="btnDaftar">Daftar Sekarang</Button>
            <Button className="btnAbout">About Us</Button>
          </Col>

          <Col lg={{span: 6, order:2}}  xs={{span: 12, order:1}} className="text-center">
            <Image fluid src="./Images/tomato.png" alt="Tomato_Salad_Pic"/>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row >
          <Col lg={12} className="trendingHeader">
            <h1>Browse Our Category</h1>
            <h2>Receipt</h2>
          </Col>

          <Col lg={12}>
            <Sliders/>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col lg={12} className="trendingHeader">
            <h1>Browse Our Trending</h1>
            <h2>Receipt</h2>
          </Col>
        </Row>

        <Row>
            {Trending && Trending.slice(0,8).map((value, index) =>{
              return(
                <>
                  <Col lg={3} xs={12} key={value.id}>
                    <Card className="trendingCard" style={{backgroundColor: colors[index]}}>
                      <Card.Body className="trendingBody">
                        <Image fluid src={value.image}/>
                        <Card.Title className="trendingTitle">{value.name}</Card.Title>
                        <Card.Text className="trendingText">
                          {value.category}
                        </Card.Text>
                        <div className="starReview">
                          <Star/>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>

        <Row>
          <Col className="text-center" lg={12}>
            <Button className="showReciept text-center"> All Recipes</Button>
          </Col>
        </Row>


      </Container>
    </>
  )
}

export default Home