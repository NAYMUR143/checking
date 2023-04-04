import { useState, useEffect } from "react";
import SimulateSearch from "./search";
import SimulateSearchResults from "./results";

const data = {
  simulateInput: [
    {
      imgUrl:
        "http://mdla.imgix.net/christian-dior/spring-2023-ready-to-wear/runway/christian-dior_0.jpg?w=300",
      title: "Dior Spring 2023",
      subtitle: "Look 1",
      category: "runway",
      id: "christian-dior/spring-2023-ready-to-wear/1",
      suggestedQuestions: [
        "Who made this?",
        "Show me similar but made earlier by John Galliano",
        "What was the inspiration?",
      ],
    },
    {
      imgUrl:
        "https://mdla-artists.imgix.net/yves-klein/untitled-anthropometry-(ant,-123).jpg",
      title: "Untitled Anthropometry (ANT, 123)",
      subtitle: "Yves Klein",
      category: "art",
      id: "yves-klein/untitled-anthropometry-(ant,-123)",
      suggestedQuestions: [
        "What is the significance?",
        "What is the color used?",
        "Where has it been referenced in fashion?",
      ],
    },
    {
      imgUrl:
        "https://mdla-photography.imgix.net/steve-jobs/steve-jobs-andy-warhol.jpg?w=600",
      title: "Steve Jobs with Andy Warhol & Keith Haring",
      subtitle: "1984",
      category: "popculture",
      id: "balenciaga/spring-2003-ready-to-wear/13",
      suggestedQuestions: [
        "Where was this taken?",
        "What were they doing?",
        "What were the artists most notable work at the time?",
      ],
    },
    {
      "imgUrl": "https://mdla-cigarette-cards.imgix.net/british-cigarette-cards/wills-cigarettes/cigarette-card----a-lady-14th-century_36717319833_o.jpg?w=300",
      "title": "A Lady in the 14th Century",
      "subtitle": "Wills Cigarettes",
      "category": "cigarette-cards",
      "id": "british-cigarette-cards/wills-cigarettes/cigarette-card----a-lady-14th-century_36717319833_o",
      "suggestedQuestions": [
        "What is the significance?",
        "When was it issued?",
        "Who is in the picture?"
      ]
    },
    {
      imgUrl:
        "https://mdla-campaigns.imgix.net/magazinescans/dior-fw-2003-vogue-uk-september-2003/IMG000018.jpeg?w=600",
      title: "Dior Fall 2003 Campaign",
      subtitle: "Vogue UK",
      category: "campaigns",
      id: "dior-fw-2003-vogue-uk-september-2003/IMG000018.jpeg",
      suggestedQuestions: [
        "Who is the model?",
        "Who shot this?",
        "What else was in the campaign?",
        "Who was creative director at the label?",
        "What was the inspiration?",
      ],
    },
    {
      imgUrl:
        "https://static01.nyt.com/images/2013/06/21/arts/JPTURRELL/JPTURRELL-superJumbo.jpg",
      title: "“Aten Reign” Gugghenheim Installation",
      subtitle: "James Turrell",
      category: "art",
      id: "gwyneth-paltrow-1996-vmas",
      suggestedQuestions: [
        "Where was this taken?",
        "What were they doing?",
        "What were the artists most notable work at the time?",
      ],
    }
  ],
};

const SimulateSection = () => {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("")
  const [options, setOptions] = useState(data.simulateInput);
  const [result, setResult] = useState({results: [], description: ""});
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(data.simulateInput[0]);

   // INITIAL CALL
   useEffect(() => {
    if (query.length > 0) return;

    // runContextualSearch("beautiful model on runway");
  }, []);

  useEffect(() => {
    setLoading(true);
    setResult({results: [], description: ""})
    if (query.length < 3) {
      setLoading(false);
      setSearch("");
      return;
    }

    setQuery("")
  }, [selectedImage]);

  useEffect(() => {
    setLoading(true);
    setResult({results: [], description: ""})
    if (query.length < 3) {
      setLoading(false);
      setSearch("");
      return;
    }

    runConversationSearch(selectedImage.id, query)
  }, [query]);


  const runConversationSearch = async (sourceId, search) => {
    try {
      const encodedSearch = encodeURIComponent(search);
      const encodedSourceId = encodeURIComponent(sourceId);
      const res = await fetch(
        `https://mdla-demo-api.onrender.com/conversation?sourceId=${encodedSourceId}&query=${encodedSearch}`
      );
      const data = await res.json();
  
      if (!data) {
        setResult({results: [], description: ""});
        setLoading(false);
  
        return;
      }
  
      setResult(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log("err");
      setResult({results: [], description: ""});
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <section className="">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 md:py-36 md:px-10 xl:px-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold">Conversation</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-800">
            Perform deeper derivative search with Q&A
          </p>
        </div>

        <div className="mt-6 flex grid-cols-12 flex-col gap-x-12 sm:mt-8 lg:mt-16 lg:grid">
          <div className="col-span-6">
            <SimulateSearchResults
              results={options}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <div className="col-span-6 mt-8 flex items-center justify-center lg:mt-0">
            <SimulateSearch
              search={search}
              setSearch={setSearch}
              setQuery={setQuery}
              selectedStory={selectedImage}
              loading={loading}
              result={result}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulateSection;
