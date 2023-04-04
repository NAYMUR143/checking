import { useState, useEffect } from "react";
import CombineSection from "./combine";
import RemixEntitiesResults from "./results";

const data = {
  imageResults: [
    {
      imgUrl:
        "https://mdla.imgix.net/balenciaga/spring-2003-ready-to-wear/runway/balenciaga_12.jpg",
      title: "Balenciaga Spring 2003",
      subtitle: "Look 13",
    },
    {
      imgUrl:
        "https://mdla.imgix.net/balenciaga/spring-2003-ready-to-wear/runway/balenciaga_13.jpg",
      title: "Gwyneth Paltrow at the 1996 VMAs",
      subtitle: "",
    },
    {
      imgUrl:
        "https://mdla.imgix.net/balenciaga/spring-2003-ready-to-wear/runway/balenciaga_12.jpg",
      title: "Balenciaga Spring 2003",
      subtitle: "Look 13",
    },
    {
      imgUrl:
        "https://mdla.imgix.net/balenciaga/spring-2003-ready-to-wear/runway/balenciaga_13.jpg",
      title: "Gwyneth Paltrow at the 1996 VMAs",
      subtitle: "",
    },
    {
      imgUrl:
        "https://mdla.imgix.net/balenciaga/spring-2003-ready-to-wear/runway/balenciaga_12.jpg",
      title: "Balenciaga Spring 2003",
      subtitle: "Look 13",
    },
  ],
  description:
    "The combined aesthetic of Wednesday Addams and Karl Lagerfeld is a mix of classic and modern, with a hint of edginess. Wednesday Addams' signature style is dark and gothic, with a focus on black and white, while Karl Lagerfeld's aesthetic is more classic and sophisticated, with a focus on high fashion. The combination of the two creates a unique look that is timeless and modern.",
};

const options = [
  { option: "met gala dresses" },
  { option: "inspired artwork" },
  { option: "magazine campaigns" },
];

const RemixEntitiesSection = () => {
  const [selectedOption1, setSelectedOption1] = useState("Wednesday Addams");
  const [selectedOption2, setSelectedOption2] = useState("Karl Lagerfeld");
  const [selectedDropdown, setSelectedDropdown] = useState(options[0]);
  const [result, setResult] = useState({results: [], answer: ""});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setResult({results: [], answer: ""});
    runRemixSearch(selectedOption1, selectedOption2, selectedDropdown.option);
  }, [selectedOption1, selectedOption2]);

  useEffect(() => {
    setLoading(true);
    runRemixSearch(selectedOption1, selectedOption2, selectedDropdown.option);
  }, [selectedDropdown]);

  const runRemixSearch = async (first, second, search) => {
    try {
      const res = await fetch(
        `https://mdla-demo-api.onrender.com/remixSearch?first=${first}&second=${second}&query=${search}`
      );
      const data = await res.json();
  
      if (!data) {
        setResult({results: [], answer: "Could not load results"});
        setLoading(false);
        return;
      }
  
      setResult(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("err");
      setResult({results: [], answer: "Error loading results"});
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 md:py-36 md:px-10 xl:px-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold">Remix Entities</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-800">
            Compound search with combined aesthetic profiles
          </p>
        </div>

        <div className="mt-6 flex grid-cols-12 flex-col gap-x-8 sm:mt-8 lg:mt-16 lg:grid">
          <div className="col-span-5">
            <CombineSection selectedOption1={selectedOption1} setSelectedOption1={setSelectedOption1} selectedOption2={selectedOption2} setSelectedOption2={setSelectedOption2} selectedDropdown={selectedDropdown} setSelectedDropdown={setSelectedDropdown}/>
          </div>
          <div className="col-span-7 mt-12 lg:mt-0">
            <RemixEntitiesResults
              results={result.results}
              description={result.answer}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemixEntitiesSection;
