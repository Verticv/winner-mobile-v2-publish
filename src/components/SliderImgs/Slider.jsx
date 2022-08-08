import React, { useState } from 'react'
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import visual from '../../assets/visual.png';
import visual2 from '../../assets/visual2.png';

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    setTimeout(() => {
        if (slideIndex === 1) {
            setSlideIndex(2);
        } else if (slideIndex === 2) {
            setSlideIndex(1);
        }
    }, 5000);

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        style={{ background: `url(${slideIndex === 1 ? visual : visual2}) 77.625rem 29.6875rem round`}}
                    >
                        {slideIndex === 1 ? <p style={{ postion: 'absolute' }}>다양하고 멋진 경기들이 준비되어 있습니다. <br /> 더 쉽고 재미있는 스포츠베팅의 세계를 경험하세요!</p> : null}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: 2 }).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}