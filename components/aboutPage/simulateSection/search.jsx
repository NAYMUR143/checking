import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Spinner } from "../Spinner";
import Story from "../Story";
import { useState } from "react";

const SimulateSearch = ({ search, setSearch, setQuery, selectedStory, loading, result }) => {
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

  const [similarImagesShown, setSimilarImagesShown] = useState(false);

  const performSearch = (search) => {
      setSearch(search)
      setQuery(search)
  }

  return (

    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          performSearch(search)
        }}
        className="mt-8 flex w-full items-center rounded-t-xl rounded-b-md bg-zinc-50 pl-4 shadow-md ring-zinc-300 drop-shadow-md focus-within:ring-2"
      >
        <HiMagnifyingGlass className="h-5 w-5" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full flex-grow rounded-full bg-zinc-50 py-2 pl-2.5 text-sm outline-none sm:text-base"
          placeholder="Ask the image a question"
        />
        <button
          type="button"
          className="mr-4 outline-none"
          onClick={() => performSearch("")}
        >
          <HiXMark className="h-5 w-5" />
        </button>
        <button
          type="submit"
          className="rounded-tr-xl rounded-br-md bg-black px-4 py-2 text-zinc-100"
        >
          Search
        </button>
      </form>

      <div className="mt-6 flex w-full flex-wrap gap-y-2 gap-x-2">
        {selectedStory.suggestedQuestions.map((suggestedSearch) => (
          <button
            onClick={() => performSearch(suggestedSearch)}
            key={suggestedSearch}
            className="flex w-fit items-center rounded-md bg-black px-3 py-2 text-left text-xs text-white outline-none sm:text-sm"
          >
            {suggestedSearch}
          </button>
        ))}

        <button
          type="button"
          onClick={() => performSearch("Show me more")}
          className="flex w-fit items-center rounded-md bg-gradient-to-r from-blue-300 to-indigo-400 px-3 py-2 text-left text-xs font-medium text-white outline-none sm:text-sm"
        >
          Show me more <span aria-hidden="true">→</span>
        </button>
      </div>

      <motion.p
        variants={p}
        key={loading}
        initial="hidden"
        animate="visible"
        className="mt-6"
      >
        {result.description.split("").map((char, idx) => (
          <motion.span key={char + "-" + idx} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      
      {loading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner color="border-black" />
        </div>
      ): null }
      
      {similarImagesShown || result.results.length > 0 ? (
        <div className="mt-2">
          <div className="mt-2 grid grid-cols-3 gap-y-4 gap-x-2 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:gap-x-2">
            {result.results.slice(0, 3).map((story) => (
              <div
                key={story.imgUrl}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow"
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:h-48">
                  <img
                    src={story.imgUrl}
                    alt={story.title}
                    className="h-full w-full object-cover object-top sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-2">
                  <h3 className="text-xs font-semibold text-black sm:text-sm">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {story.title}
                    </a>
                  </h3>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    {story.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SimulateSearch;
