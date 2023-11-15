'use client'
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaCircle } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const placeholderImages = [
  'https://via.placeholder.com/1920x1080',
  'https://via.placeholder.com/1920x1080',
  'https://via.placeholder.com/1920x1080',
  // Add more placeholder image URLs as needed
];

function TestimonialsTest() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % placeholderImages.length);
    }, 5000); // Change the interval as needed (e.g., 5000 for 5 seconds)

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % placeholderImages.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + placeholderImages.length) % placeholderImages.length);
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <div style={{ transform: `translateX(-${activeSlide * 100}vw)`, maxHeight: '1345px' }} className="flex transition-transform duration-300 ease-in">
        {placeholderImages.map((imageUrl, index) => (
          <div key={index} className="w-screen h-full flex justify-center items-center">
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="object-cover max-w-full max-h-full" />
          </div>
        ))}
      </div>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 absolute bottom-8 w-full">
        {placeholderImages.map((_, index) => (
          <FaCircle
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`mx-1 cursor-pointer ${index === activeSlide ? 'text-[--brand-color]' : 'text-gray-300'}`}
            size={8}
          />
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="absolute inset-y-1/2 left-0 flex items-center">
        <Button className="rounded-full" variant={'ghost'} onClick={handlePrevSlide}>
          <FaArrowRight size={24} />
        </Button>
      </div>
      <div className="absolute inset-y-1/2 right-0 flex items-center">
        <Button className="rounded-full" variant={'ghost'} onClick={handleNextSlide}>
          <FaArrowRight size={24} />
        </Button>
      </div>
    </section>
  );
}

export default TestimonialsTest;
