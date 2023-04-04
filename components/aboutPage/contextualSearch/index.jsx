import { useState, useEffect } from "react";
import ContextualSearch from "./search";
import ContextualSearchResults from "./results";

const initData = {
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
    "For the 1996 VMAs, Gwyneth Paltrow wore an iconic red velvet suit made by Tom Ford at Gucci for the Fall/Winter 1996 collection. An original complete suit is available for purchase at middlemanstore.com for $4,000.",
};

const ContextualSearchSection = () => {
  const [query, setQuery] = useState("Pleated skirts made by Prada");
  const [results, setResults] = useState([]); // initialize as "[]" when using API
  const [description, setDescription] = useState(""); // initialize as "[]" when using API
  const [loading, setLoading] = useState(false); // set true when using API

  // INITIAL CALL
  useEffect(() => {
    if (query.length > 0) return;

    // runContextualSearch("beautiful model on runway");
  }, []);

  useEffect(() => {
    setLoading(true);
    if (query.length < 3) {
      setResults([]);
      setLoading(false);
      return;
    }

    runContextualSearch(query);
  }, [query]);

  const runContextualSearch = async (search) => {
    try {
      const encodedSearch = encodeURIComponent(search);
      const res = await fetch(
        `https://mdla-demo-api.onrender.com/contextSearch?query=${encodedSearch}`
      );
      const data = await res.json();

      if (!data || !data.results) {
        setResults([]);
        setDescription("");
        setLoading(false);

        return;
      }

      setResults(data.results);
      setDescription(data.description);
      console.log(data.results);
      setLoading(false);
    } catch (error) {
      console.log("err");
      setResults([]);
      setDescription("");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 md:py-36 md:px-10 xl:px-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold">Contextual Search</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-800">
            Integrated with knowledge of culture, commentary and commerce
          </p>
        </div>

        <div className="mt-6 flex grid-cols-12 flex-col gap-x-8 sm:mt-8 lg:mt-16 lg:grid">
          <div className="col-span-5 ">
            <ContextualSearch query={query} setQuery={setQuery} />
          </div>
          <div className="col-span-7 mt-8 lg:mt-0">
            <ContextualSearchResults
              results={results}
              description={description}
              loading={loading}
              query={query}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextualSearchSection;
