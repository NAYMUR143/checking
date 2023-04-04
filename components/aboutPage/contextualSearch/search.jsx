import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

const suggestedSearches = [
  "Pleated skirts made by Prada",
  "Inspired by red riding hood",
  "Leather jackets styled with scarfs by Hedi Slimane",
  "Which runway show was inspired by Dante's Inferno?",
  "Who did Gwyneth Paltrow wear to her first VMAs and can I buy it?",
  "How have skirt lengths correlated to the S&P 500 since 2000?",
  "Generate a moodboard inspired by the Endless Summer",
];

const ContextualSearch = ({ query, setQuery }) => {
  return (
    <div className="flex flex-col justify-center rounded-lg">
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex items-center rounded-t-xl rounded-b-md bg-zinc-50 pl-4 shadow-md ring-zinc-300 drop-shadow-md focus-within:ring-2"
        >
          <HiMagnifyingGlass className="h-5 w-5" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled
            className="w-full flex-grow rounded-full bg-zinc-50 py-2 pl-2.5 text-sm outline-none sm:text-base"
            placeholder="Select a search below"
          />
          <button
            type="button"
            className="mr-4 outline-none"
            onClick={() => setQuery("")}
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
      </div>

      <div className="mt-6 flex flex-wrap gap-y-2 gap-x-2">
        {suggestedSearches.map((suggestedSearch) => (
          <button
            onClick={() => setQuery(suggestedSearch)}
            key={suggestedSearch}
            className="flex w-fit items-center rounded-md bg-black px-3 py-2 text-left text-xs text-white outline-none sm:text-sm"
          >
            {suggestedSearch}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContextualSearch;
