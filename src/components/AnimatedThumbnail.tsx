import { useState, useEffect } from "react";

interface AnimatedThumbnailProps {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
}

const AnimatedThumbnail = ({ images, alt, interval = 3000, className = "" }: AnimatedThumbnailProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative ${className}`}>
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={alt}
          className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 absolute inset-0 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 1s ease-in-out" }}
        />
      ))}
    </div>
  );
};

export default AnimatedThumbnail;
