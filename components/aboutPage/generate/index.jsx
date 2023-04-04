import { useState, useEffect } from "react";
import Generate from "./generate";
import GenerateResult from "./result";

export default function GenerativeSimulation() {
  const [selectedOption1, setSelectedOption1] = useState(
    "ad campaign"
  );
  const [selectedOption2, setSelectedOption2] = useState(
    "bottled water company"
  );
  const [selectedOption3, setSelectedOption3] = useState("Nick Knight");

  const folderPath = "/images/generations/"
  const formattedImageUrl = (option1, option2, option3) => {
    const baseUrl = folderPath + option1 + "-" + option2 + "-" + option3.toLowerCase() + ".jpg"
    const formattedUrl = baseUrl.replace(/\s/g, "-")
    return formattedUrl
  }

  const [result, setResult] = useState(
    formattedImageUrl(selectedOption1, selectedOption2, selectedOption3)
  ); // don't know exactly format of returned api

  useEffect(() => {
    setResult(formattedImageUrl(selectedOption1, selectedOption2, selectedOption3));
  }, [selectedOption1, selectedOption2, selectedOption3]);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 md:py-36 md:px-10 xl:px-16">
        <h2 className="text-4xl font-semibold">Generative Simulation</h2>
        <p className="mt-4 text-lg leading-8 text-zinc-800">
            Access custom attributed models for rapid sampling
        </p>
        <div className="mt-6 flex grid-cols-12 flex-col gap-x-8 sm:mt-8 lg:mt-16 lg:grid">
          <div className="col-span-6 ">
            <Generate
              selectedOption1={selectedOption1}
              setSelectedOption1={setSelectedOption1}
              selectedOption2={selectedOption2}
              setSelectedOption2={setSelectedOption2}
              selectedOption3={selectedOption3}
              setSelectedOption3={setSelectedOption3}
            />
          </div>
          <div className="col-span-6 mt-16 lg:mt-0">
            <GenerateResult result={result} />
          </div>
        </div>
      </div>
    </section>
  );
}
