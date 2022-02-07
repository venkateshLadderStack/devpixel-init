import React, { useRef } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import PrevImg from "../../assets/img/arow-left.svg"
import NextImg from "../../assets/img/arrow-ri.svg"

const Testimonials = ({ data }) => {
  const customeSlider = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsiveClass: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          dotsClass: "button__bar",
        },
      },
    ],
  }

  return (
    <Wrapper>
      <Left onClick={() => customeSlider.current.slickPrev()}>
        <img src={PrevImg} alt="" />
      </Left>
      <TestimonialWrapper>
        <Slider {...settings} ref={customeSlider}>
          {data?.map((item, i) => (
            <Single key={i}>
              <Card className="safe__hand__fx">
                <Avatar className="safe__hgand--img">
                  <img src={item?.image?.localFile?.publicURL} alt="" />
                </Avatar>
                <div className="safe__hand__ct">
                  <p>{item?.quote}</p>
                  <span>{item?.authorDetail}</span>
                </div>
              </Card>
            </Single>
          ))}
        </Slider>
      </TestimonialWrapper>
      <Right onClick={() => customeSlider.current.slickNext()}>
        <img src={NextImg} alt="" />
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TestimonialWrapper = styled.div`
  width: 90%;
  height: 224px;
  border-radius: 8px;
  background: #1a3d52;
  z-index: 6;

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 27px;
    display: block;
  }
`

const Left = styled.div`
  margin-right: -35px;
  width: 63px;
  height: 63px;
  z-index: 10;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    box-shadow: 0 0 15px #1c1c1c;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Right = styled.div`
  margin-left: -35px;
  width: 63px;
  height: 63px;
  z-index: 9;
  cursor: pointer;

  &:hover {
    border-radius: 50%;
    box-shadow: 0 0 15px #1c1c1c;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const Single = styled.div`
  height: 224px;
`

const Card = styled.div`
  height: 224px;
  @media screen and (max-width: 767px) {
    height: unset;
  }
`

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  max-height: 104px;
  max-width: 100px;

  @media screen and (max-width: 767px) {
    max-height: 80px;
    max-width: 80px;
  }
`

export default Testimonials
