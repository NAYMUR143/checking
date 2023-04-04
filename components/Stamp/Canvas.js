import { useEffect, useState, useRef } from "react";
import useSWR from "swr";

const imagesToPreload = [
  "/images/stamps/03e24c0f9a44192bc697d1b11f962e59290a046a.jpg",
  "/images/stamps/08cf48f878e74558e16f590d112f3e5e31297613.jpg",
  "/images/stamps/0d9afe5749f524d7dd76a9a7162deff7400952f1.jpg",
  "/images/stamps/0e1aedaea2eb6bf754a132f76e7f430a87ab9015.jpg",
  "/images/stamps/0ff002e7174dffd64eaea99530ac8102ed037c04.jpg",
  "/images/stamps/18b523d3a8888a2ffecb0a05128e1a61a3758561.jpg",
  "/images/stamps/1c255f4fde4abf74cf3c9cdd3b19cb30c9bc7b6d.jpg",
  "/images/stamps/22c93eb5a24c074177e82103d64bddf03475742e.jpg",
  "/images/stamps/23179a133e169de6dc3de39b2129c3aff83c3245.jpg",
  "/images/stamps/2cd0862ea424569c7443410c9ae6a039805f0ea5.jpg",
  "/images/stamps/2cf0ae8d6533f8491b3a119e0672acb2948b0497.jpg",
  "/images/stamps/2ff3faa04410afbfc48a265bba130654e812cea7.jpg",
  "/images/stamps/313ce35b909a51c7115c5fbf9cca5c38987f8d38.jpg",
  "/images/stamps/3765547e0df9e8c77eb940166239e11f7db5bbbe.jpg",
  "/images/stamps/3b1ef27e7a4755a5bbafc8bb7e1cc61ed9ccd4e8.jpg",
  "/images/stamps/4b87bdfa680a3c58b6c09e942014761087a9d97c.jpg",
  "/images/stamps/5f33e1481f7cd0a4cba42acefd658ecdb4c510ba.png",
  "/images/stamps/62f1fa52636a8f858a50aa40403e8cfaa723f9cf.jpg",
  "/images/stamps/69c2874c75099a0664c2181da48a05aca8d82122.jpg",
  "/images/stamps/7229cbd10560aad3ff758f12278bb61bd429a9ef.jpg",
  "/images/stamps/75fe873f5967ae75d55dfc28007e4bb64a2cfa82.jpg",
  "/images/stamps/78b9f53a09f84234b3fb96c4042a5f3296f338dc.jpg",
  "/images/stamps/7900b630e5e0956f5ea8c921b662814209dddadd.jpg",
  "/images/stamps/88b5c5403374cd541ca5445a0bc30403876a66d9.jpg",
  "/images/stamps/8a6ece6b0a77e738b159e435059bdafcd9ec9e50.jpg",
  "/images/stamps/8db576e9372a97ee0168992dfbc279069e9b0903.jpg",
  "/images/stamps/9350703fa3810fa0224be046a408a3a5f7c9830b.jpg",
  "/images/stamps/949f8ba61f980c99b6e7c84e75205b5ef3c4a15b.jpg",
  "/images/stamps/9d9b11607749344056fa8a16ea46c2b60e7d1643.jpg",
  "/images/stamps/9ff3373c3f1a1ff486aa034c3d288c0e6626e7f3.jpg",
  "/images/stamps/a57ecce97a83750fef26f3867a6059c3e52e4f98.jpg",
  "/images/stamps/ab549e887b8585702887c0821c28fa8d37c4d2a0.jpg",
  "/images/stamps/ac8d0d603c1e3579775c45b810f01ba5249409a0.jpg",
  "/images/stamps/ae3954c1bd068df3f995d81fc9e32338aa64d739.jpg",
  "/images/stamps/babb9a63c8b54002173fd6207a86cc3432840b86.jpg",
  "/images/stamps/c60038780d972b722da278b24e40574e524b56fb.jpg",
  "/images/stamps/c9a67bc2d8b01882bd3a36fb044c7f2497290017.jpg",
  "/images/stamps/cace7f85db3c03905db1541f8c0a77770078b9e7.jpg",
  "/images/stamps/d01200121166c0c88191bf7af0479d65ef152ccd.jpg",
  "/images/stamps/d2b0a07fd38a298895364cfaf0106fc13661d5ed.jpg",
  "/images/stamps/e5d31ea51cbc293e1fbd22eb378de21bd4356fd5.jpg",
  "/images/stamps/f92b7f6834d49d3b3856103813696075438b6ff7.jpg",
  "/images/stamps/ff396e65537fb16d7fab16960c6f13523b88e6f2.jpg",
  "/images/stamps/ff75c5220eed8c2722ad1f06ebd7086baaeb6de2.jpg",
  "/images/stamps/ff9e105685b4670a3867d76345ec4f790e0725cf.jpg",
  "/images/stamps/FoeiOxYXwAMArbp.jpeg",
  "/images/stamps/slimaarons.png",
  "/images/stamps/Fq-eArfaIAAnUqf.jpeg",
  // "/images/stmaps/EggOftJU8AAwfPT.jpeg"
];

// Randomiser with no repeats
var alreadyDone = [];

// Function picking random values from array
const randomValueFromArray = (myArray) => {
  // If alreadyDone is empty then fill it will indexes equal
  // to the size of myArray
  if (alreadyDone.length === 0) {
    for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
  }

  // Generate random number within the range of
  // length of alreadyDone array
  var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);

  // Getting unaccessed index of myArray using above
  // random number
  var indexOfItemInMyArray = alreadyDone[randomValueIndex];

  // remove this index from alreadyDone array because
  // we are accessing it now.
  alreadyDone.splice(randomValueIndex, 1);

  // Get the value
  return myArray[indexOfItemInMyArray];
};

// Mouse Coords

let mouseX = 0;
let mouseY = 0;

export default function Canvas({ stampOptions }) {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [isStamping, setIsStamping] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // const { data: imagesToPreload } = useSWR("/api/images", fetcher);

  let img = null;

  useEffect(() => {
    if (images.length === 0) return;

    setImage(randomValueFromArray(images));

    const canvas = canvasRef.current;
    canvas
      .getContext("2d")
      .scale(window.devicePixelRatio, window.devicePixelRatio);
    setCtx(canvas.getContext("2d"));
  }, [images]);

  useEffect(() => {
    if (!imagesToPreload) return;
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
      setImages((images) => [...images, img]);
    });
  }, [imagesToPreload]);

  useEffect(() => {
    // const ctx = canvasRef.current.getContext("2d");
    // requestAnimationFrame(() => draw(ctx));
    if (!ctx) return;

    const handleResize = (e) => {
      ctx.canvas.height = window.innerHeight * window?.devicePixelRatio;
      ctx.canvas.width = window.innerWidth * window?.devicePixelRatio;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [ctx]);

  const start = (event) => {
    if (images.length === 0) return;

    mouseX = event.pageX * window?.devicePixelRatio;
    mouseY = event.pageY * window?.devicePixelRatio;
    ctx.drawImage(image, mouseX - image.width / 2, mouseY - image.height / 2);

    setIsStamping(true);
    // draw(event);
    event.preventDefault();
  };

  const draw = (event) => {
    if (isStamping && image) {
      let initX = mouseX;
      let initY = mouseY;

      mouseX = event.pageX * window?.devicePixelRatio;
      mouseY = event.pageY * window?.devicePixelRatio;

      let posX = (mouseX - initX) / 50;
      let posY = (mouseY - initY) / 50;
      for (var g = 0; g < 50; g++)
        ctx.drawImage(
          image,
          initX + posX * g - image.width / 2,
          initY + posY * g - image.height / 2
        );
    }

    event.preventDefault();
  };

  const end = (event) => {
    if (isStamping) {
      setImage(randomValueFromArray(images));
      setIsStamping(false);
    }

    event.preventDefault();
  };
  if (typeof window === "undefined") return null;
  return (
    <>
      <canvas
        className="z-20 h-full w-full"
        ref={canvasRef}
        onMouseDown={start}
        onMouseMove={draw}
        onMouseUp={end}
      />
      {/* <div className="absolute bottom-0 right-0">
        {images?.length} / {imagesToPreload?.length}
      </div> */}
    </>
  );
}
