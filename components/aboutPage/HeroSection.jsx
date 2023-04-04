import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const Canvas = dynamic(() => import("../../components/Stamp/Canvas"), {
  ssr: false,
});

// bg-green-100 sm:bg-yellow-100 md:bg-red-100 lg:bg-blue-100 xl:bg-orange-100

const AboutHeroSection = ({ toggleSignupModal }) => {

  return (
    <section className="relative">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 sm:py-40 lg:pb-56">
        <div className="absolute inset-0">
          <Canvas />
        </div>
        <Image
          src="/images/brands/black.png"
          alt="MDLA Logo Black"
          width={96}
          height={96}
          className="z-20 hover:animate-spin-slow"
        />

        <div className="relative z-20 mx-auto w-full max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pointer-events-none z-20 mt-6 text-center text-5xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-6xl md:text-7xl"
          >
            MDLA is building a new image search engine
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="mt-6 select-none text-lg leading-8 text-gray-600"
          >
            Enabling new paradigms for search & intelligence. We index
            comprehensive culture graphs to unlock knowledge in images.
          </motion.p> */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="z-20 flex items-center justify-center rounded-full border-2 border-black px-3 py-1.5 sm:px-5 sm:py-2.5"
            >
              <span className="text-xs sm:text-base">Read our manifesto</span>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              type="button"
              onClick={toggleSignupModal}
              className="group z-20 flex items-center gap-x-2 rounded-full border-2 border-black bg-black px-3 py-1.5 text-white sm:px-5 sm:py-2.5"
            >
              <span className="text-xs sm:text-base">
                Signup for early access
              </span>
              <HiArrowUpRight className="mt-0.5 group-hover:animate-bounce" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
