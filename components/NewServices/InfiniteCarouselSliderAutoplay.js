import Image from 'next/image';
import React from 'react'

const InfiniteCarouselSliderAutoplay = ({elements}) => {
  return (
    <div className="slider">
    <div className="slide-track">
    {elements.map((element, index) => {
    return (
        <div className="slide" key={index}>
        <Image
            key={index}
            src={element.src}
            alt={element.alt}
            height={element.height}
            width={element.width}
        />
        </div>
    );
})}
{/**Lo mapeo 2 veces para dar el efecto de carrusel */}
{elements.map((element, index) => {
    return (
        <div className="slide" key={index}>
        <Image
            key={index}
            src={element.src}
            alt={element.alt}
            height={element.height}
            width={element.width}
        />
        </div>
    );
})}
    </div>
</div>
  )
}

export default InfiniteCarouselSliderAutoplay