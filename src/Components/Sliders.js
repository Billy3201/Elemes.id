import React from 'react'
import Category from "../Category.json"
import { Card, Image, Col, Button } from 'react-bootstrap';
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
import { useRef } from 'react';
import Slider from "react-slick";

function Sliders() {

    const colors2 = ['#F0FEEB', '#E4F2F4', '#EAEEFA', '#F9EEF3', '#F3F7D9','#F9EEF3','#E4F2F4'];
    const customeSlider = useRef();

    const previous = () => {
      customeSlider.current.slickNext();
    };
  
    const next = () => {
      customeSlider.current.slickPrev();
    };
  
    var settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
        ]
      };

  return (
    <>
        <Slider {...settings} ref={customeSlider}>
            {Category && Category.map((value, index) =>{
              return(
                <>
                  <Card className="categoryCard text-center" style={{backgroundColor: colors2[index]}}>
                    <Card.Body >
                      <Image fluid style={{margin: "20px 0px"}} className="mx-auto" src={value.image} width="47px" height="47px"/>
                      <Card.Title>{value.category}</Card.Title>
                      <Card.Text>
                        {value.total}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
        </Slider>

        <Col lg={12} className="text-end d-none d-lg-block" style={{marginTop: "20px"}}>
            <Button className="btnSlider" onClick={next}> 
              <AiFillLeftCircle size={25} style={{marginRight:"2px"}}/>
              Prev
            </Button>

            <Button className="btnSlider" onClick={previous}>
              Next 
              <AiFillRightCircle size={25} style={{marginLeft:"2px"}}/>
            </Button>
        </Col>
    </>
  )
}

export default Sliders