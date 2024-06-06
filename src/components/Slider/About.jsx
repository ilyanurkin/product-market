import React from "react";
import fresh from "../../../public/images/fresh.jpg";
import delivery from "../../../public/images/delivery.jpg";
import care from "../../../public/images/care.png";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function About() {
  const sliderTextParams = {
    position: "absolute",
    width: "100%",
    background: "rgba(0,0,0,0.65)",
    color: "white",
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };
  const sliderImgParams = { width: "50vw", height: "70vh" };
  return (
    <CarouselProvider
      naturalSlideWidth={700}
      naturalSlideHeight={200}
      totalSlides={3}
    >
      <Slider
        style={{
          borderTopLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          width: "50vw",
          height: "70vh",
        }}
      >
        <Slide index={0}>
          <p style={sliderTextParams}>
            Свежесть: Для заботы о Вашем здоровье мы закупаем только свежие
            продукты
          </p>
          <img src={fresh} alt="" style={sliderImgParams} />
        </Slide>
        <Slide index={1}>
          <p style={sliderTextParams}>
            Доставка: Покупки не выходя из дома? Нет Проблем, закажите доставку
          </p>
          <img src={delivery} alt="" style={sliderImgParams} />
        </Slide>
        <Slide index={2}>
          <p style={sliderTextParams}>
            Забота и ответственность: мы работаем только с проверенными,
            сертифицированными поставщиками продуктом
          </p>
          <img src={care} alt="" style={sliderImgParams} />
        </Slide>
      </Slider>
      <div className="button-div">
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </div>
    </CarouselProvider>
  );
}
