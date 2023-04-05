import { useEffect, useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
const Story = () => {
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const leftImages = [
    {
      img: "/images/story/img2.1.png",
      alt: "img2.1",
      class: "img img2 ",
      line: "line img2line img2line1",
    },
    {
      img: "/images/story/img2.2.png",
      alt: "img2.2",
      class: "img img2 ",
      line: "line img2line img2line2",
    },
    {
      img: "/images/story/img2.3.png",
      alt: "img2.3",
      class: "img img2 ",
      line: "line img2line img2line3",
    },
    {
      img: "/images/story/img3.1.png",
      alt: "img3.1",
      class: "img img3",
      line: "line img3line img3line1",
    },
    {
      img: "/images/story/img3.2.png",
      alt: "img3.2",
      class: "img img3",
      line: "line img3line img3line2",
    },
    {
      img: "/images/story/img3.3.png",
      alt: "img3.3",
      class: "img img3",
      line: "line img3line img3line3",
    },
  ];
  const rightImages = [
    {
      img: "/images/story/img2.4.png",
      alt: "img2.4",
      class: "img img2",
      line: "line img2line img2line4",
    },
    {
      img: "/images/story/img3.7.png",
      alt: "img3.7",
      class: "img img3",
      line: "line img3line img3line4",
    },
    {
      img: "/images/story/img3.4.png",
      alt: "img3.4",
      class: "img img3",
      line: "line img3line img3line5",
    },
    {
      img: "/images/story/img3.6.png",
      alt: "img3.6",
      class: "img img3",
      line: "line img3line img3line6",
    },
    {
      img: "/images/story/img3.5.png",
      alt: "img3.5",
      class: "img img3",
      line: "line img3line img3line7",
    },
  ];
  const textData = [
    {
      static: "Images have lots of knowledge.",
      animated: "It's hard to index this knowledge",
    },
    {
      static: "Knowledge that's not always at the surface.",
      animated: "Which why most image search engines dont't.",
    },
    {
      static: "Especially in artistic domains like fashion.",
      animated: "But what if someone did?",
    },
  ];
  console.log(textData);
  const main = useRef();
  const tl = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.set(".img2", {
      scale: 0.2,
      opacity: 0,
    });
    gsap.set(".img2line", {
      scaleX: 0.2,
      opacity: 0,
    });
    gsap.set(".img3", {
      scale: 0.2,
      opacity: 0,
    });
    gsap.set(".img3line", {
      scaleX: 0.2,
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: main.current,
          scrub: 1,
          start: "top top",
          pin: true,
          nd: "+=2000px",
        },
      })
      .to(".img2", {
        scale: 1,
        opacity: 1,
        ease: "Expo.easeOut",
        duration: 2,
      })
      .to(".img2line", {
        ease: "Expo.easeOut",
        duration: 2,
        scaleX: 1,
        opacity: 1,
        stagger: 0.5,
      })
      .to(".img3", {
        scale: 1,
        opacity: 1,
        ease: "Expo.easeOut",
        stagger: 0.6,
        ease: "expo.out",
        duration: 2,
      })
      .to(".img3line", {
        ease: "Expo.easeOut",
        duration: 2,
        scaleX: 1,
        opacity: 1,
        stagger: 0.5,
      })
      .to(".staticTxt ", {
        opacity: 0,
        stagger: 0.5,
      })
      .to(".animatedTxt ", {
        opacity: 1,
        stagger: 0.5,
      });
  }, []);

  return (
    <div
      className="mx-auto h-screen  max-w-5xl place-content-center bg-white 
      "
      ref={main}
    >
      <div className="story-container">
        <div className="images-container">
          <div className="images left-images">
            {leftImages.map((images, index) => {
              return (
                <>
                  <div className={images.class} key={index}>
                    <Image
                      src={images.img}
                      alt={images.alt}
                      width={480}
                      height={720}
                    />
                  </div>
                </>
              );
            })}
            {leftImages.map((images, index) => {
              return (
                <>
                  <div className={images.line}></div>
                </>
              );
            })}
          </div>
          <div className="static-container">
            <div className="static-img">
              <Image
                src="/images/story/static.png"
                alt="staic.png"
                width={280}
                height={720}
              />
            </div>
          </div>
          <div className="images right-images">
            {rightImages.map((images, index) => {
              return (
                <>
                  <div className={images.class} key={index}>
                    <Image
                      src={images.img}
                      alt={images.alt}
                      width={480}
                      height={720}
                    />
                  </div>
                </>
              );
            })}
            {rightImages.map((images, index) => {
              return (
                <>
                  <div className={images.line}></div>
                </>
              );
            })}
          </div>
        </div>
        <div className="text-wrapper">
          {textData.map((text, index) => {
            return (
              <motion.div key={index} animate="visible" className="text">
                <h1 className="staticTxt">
                  {text.static.split("").map((char, id) => (
                    <motion.span key={char + "-" + id} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </h1>
                <h1 className="animatedTxt">
                  {text.animated.split("").map((char, id) => (
                    <motion.span key={char + "-" + id} variants={letter}>
                      {char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Story;
