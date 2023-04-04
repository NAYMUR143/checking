import { motion } from "framer-motion";
import { Spinner } from "../Spinner";
import Image from "next/image";

const ContextualSearchResults = ({ results, description, loading, query }) => {
  const p = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.008,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner color="border-black" />
      </div>
    );
  }

  if (!results || results.length === 0 || !query) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span>
          {!query ? "Select a search to get started!" : "No results found"}
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex  flex-col">
        <div className="grid grid-cols-3 gap-y-4 gap-x-2 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-2">
          {results.map((story) => (
            <div
              key={story.imgUrl}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
            >
              <div className="aspect-w-3 aspect-h-4 relative bg-gray-200 sm:h-48">
                <Image
                  src={story.imgUrl}
                  alt={story.title}
                  layout="fill"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-2 p-2">
                <h3 className="text-xs font-semibold text-black sm:text-sm">
                  {story.title}
                </h3>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {story.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 xl:mt-6">
          <motion.p
            key={loading}
            variants={p}
            initial="hidden"
            animate="visible"
            className="sm:text-lg"
          >
            {description.split("").map((char, idx) => (
              <motion.span key={char + "-" + idx} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ContextualSearchResults;
