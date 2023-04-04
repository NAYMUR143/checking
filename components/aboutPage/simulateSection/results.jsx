import Image from "next/image";
import Story from "../Story";
import { Tab } from "@headlessui/react";

const SimulateSearchResults = ({
  results,
  selectedImage,
  setSelectedImage,
}) => {
  return (
    <div className="flex flex-col items-center xl:py-0">
      <div className="mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {results.map((story) => (
            <div
              onClick={() => setSelectedImage(story)}
              key={story.imgUrl}
              className={`${
                story.title === selectedImage.title ? "ring-2 " : ""
              } group relative flex scale-95 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow ring-blue-500 ring-offset-2`}
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
                  <span aria-hidden="true" className="absolute inset-0" />
                  {story.title}
                </h3>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {story.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimulateSearchResults;
