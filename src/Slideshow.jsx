import { useEffect, useState } from "react";

const images = [
  "/src/assets/Image.png",
  "/src/assets/Image2.png",
  "/src/assets/Image3.png",
  "/src/assets/Image4.png",
  "/src/assets/Image5.png",
  "/src/assets/Image6.png",
  "/src/assets/Image7.png",
  "/src/assets/Image8.png",
  "/src/assets/Image9.png",   
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 секунди

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}
