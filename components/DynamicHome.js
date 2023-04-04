import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => {

  const pages = [import("./Stamp/Stamp")]

  const random = Math.floor(Math.random() * pages.length) + 0
  return pages[random];
});

export default DynamicHome;