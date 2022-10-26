/* eslint-disable @next/next/no-img-element */
import { ArrowRightCircle } from '@styled-icons/bootstrap/ArrowRightCircle'
import { ArrowLeftCircle } from '@styled-icons/bootstrap/ArrowLeftCircle'
import * as S from './styles'
import Slider from 'react-slick'
import { mockTestimonial } from './mockTestimonial'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <ArrowRightCircle className="arrowDark" />,
    prevArrow: <ArrowLeftCircle className="arrowDark" />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <S.Wrapper>
      <h2 className="heading-title"> Notícias </h2>
      <Slider {...settings}>
        {mockTestimonial.map((item) => (
          <div key={item.id} className="card">
            <div className="imageBox">
              <img src="/bgs/cannb.jpg" />
            </div>

            <div className="content">
              <h4 className="content-title">{item.attributes.title} </h4>
              <p className="content-text"> {item.attributes.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Testimonial
