// src/components/ImageCarousel.jsx
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function ImageCarousel({ images }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <div 
          ref={sliderRef} 
          className="keen-slider w-full h-64 rounded-xl overflow-hidden"
        >
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
