'use client'  // TODO Needed here?

// components/MaterialCarousel.tsx
import React, { useRef, useEffect } from "react";
import Image from "next/image";


const MaterialCarousel = ({ images }: { images: string[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (carouselRef.current) {
        e.preventDefault();
        carouselRef.current.scrollLeft += e.deltaY;
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel?.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="relative h-[calc(100vh-60px)] w-full">
      <div 
        ref={carouselRef} 
        className="flex overflow-x-auto absolute inset-0 pb-4 pl-4 sm:pl-5"
      >
        {images.map((src, index) => (
          <div key={index} className={`flex-shrink-0 mr-10 h-full ${index === 0 ? 'ml-4 sm:ml-5' : ''}`}>
            <Image
              src={src}
              alt={`image ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: '90%' }}
              className="w-auto h-full object-contain"
              quality={100}
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default MaterialCarousel;