import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiArrowDown, HiCheck } from "react-icons/hi2";

const suggested = [
  "Paris Hilton",
  "James Bond",
  "Wednesday Addams",
  "Piet Mondrian",
  "Julian Casablancas",
  "Karl Lagerfeld",
  // "Herman Miller",
  "Vincent Van Gogh",
  "Dipping Dots",
  "Bass Pro Shop",
  "Rick Owens",
  "Frank Lloyd Wright",
  "Slim Aarons",
];

const options = [
  { option: "met gala dresses" },
  { option: "inspired artwork" },
  { option: "magazine campaigns" },
  { option: "british cigarette cards" },
  { option: "syrian casette tapes" },
];

const CombineSection = ({ 
  selectedOption1,
  setSelectedOption1,
  selectedOption2,
  setSelectedOption2,
  selectedDropdown,
  setSelectedDropdown 
}) => {
  const selectRemix = (remix) => {
    if (selectedSuggestion) {
      if (selectedOption1 === remix) return;
      setSelectedOption2(remix);
    } else {
      if (selectedOption2 === remix) return;
      setSelectedOption1(remix);
    }
  };

  const Dropdown = ({ selected, setSelected }) => {
    return (
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="group flex font-medium underline">
            <span className="block truncate">{selected.option}</span>
            <span className="pointer-events-none">
              <HiArrowDown className="mt-1 group-hover:animate-bounce" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.option}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    );
  };  

  const [selectedSuggestion, setSelectedSuggestion] = useState(true);

  return (
    <div>
      <h3 className="text-3xl">
        Combine the aesthetic of&nbsp;
        <span
          onClick={() => setSelectedSuggestion(false)}
          className={`underline underline-offset-2 ${
            !selectedSuggestion ? "bg-blue-100 font-medium" : ""
          }`}
        >
          {selectedOption1 ? selectedOption1 : "________"}
        </span>
        &nbsp;and&nbsp;
        <span
          onClick={() => setSelectedSuggestion(true)}
          className={`underline underline-offset-2 ${
            selectedSuggestion ? "bg-blue-100 font-medium" : ""
          }`}
        >
          {selectedOption2 ? selectedOption2 : "________"}
        </span>
      </h3>

      <div className="mt-6 flex flex-wrap gap-y-2 gap-x-2 py-4 xl:py-0">
        {suggested.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            disabled={
              selectedOption1 === suggestion || selectedOption2 === suggestion
            }
            onClick={() => selectRemix(suggestion)}
            className={`w-fit rounded-md px-1.5 py-0.5 text-white ${
              selectedOption1 === suggestion || selectedOption2 === suggestion
                ? "bg-blue-500"
                : "bg-black"
            }`}
          >
            {suggestion}
          </button>
        ))}
      </div>

      <h3 className="mt-6 inline-flex flex-wrap text-3xl">
        <span className="whitespace-nowrap">& show me&nbsp;</span>

        <Dropdown
          selected={selectedDropdown}
          setSelected={setSelectedDropdown}
        />
      </h3>
    </div>
  );
};

export default CombineSection;
