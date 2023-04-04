import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
const Canvas = dynamic(() => import("./Canvas"));

const brandImages = [
  "/images/brands/mdla1.png",
  "/images/brands/mdla2.png",
  "/images/brands/mdla3.png",
  "/images/brands/mdla4.png",
  "/images/brands/mdla5.png",
  "/images/brands/mdla6.png"
];

export default function Stamp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null)

  const switchImage = () => {
    if (currentIndex < brandImages.length - 1) {
     setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      switchImage()
    }, 140);
    return () => clearInterval(interval);
  }, [currentIndex])
  // useEffect(() => {
  //   if(timerRef.current){
  //       clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //       setCurrentIndex(c=>(c+1) % brandImages.length);
  //   }, 100);
  //   return ()=>clearTimeout(timerRef.current);
  // }, [currentIndex]);

  // useEffect(() => {
  //   if (!brandImages) return;
  //   brandImages.forEach((image) => {
  //     const img = new Image();
  //     img.src = image;
  //   });
  // }, [brandImages])


  return (
    <>
      {/* <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
      `}</style> */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Canvas />
        </div>
        <div className="relative flex items-center justify-center h-screen overflow-hidden pointer-events-none">
          <img src={brandImages[currentIndex]} className="banner-image"/>
        </div>
        <a href="https://apps.apple.com/us/app/mdla-runway-fashion-magazine/id1642279998">
        <img
          src="/images/brands/black.png"
          className="absolute z-50 w-24 h-24 top-6 right-6"
        />
        </a>
        <h1 className="absolute z-50 w-50 h-30 bottom-12 right-6">Inquiries: <a href="mailto:contact@mdla.xyz">contact@mdla.xyz</a></h1>
      </div>
    </>
  );
}
