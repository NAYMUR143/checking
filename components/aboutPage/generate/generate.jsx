const options1 = ["ad campaign", "magazine cover", "2d illustration"];
const options2 = [
  // "cyberpunk android",
  "bottled water company",
  "spirit of america",
  "midsommar inspired film",
  "raf simons aw03 parka"
];
const options3 = ["Nick Knight", "Tom Ford-era Gucci", "Katsushika Hokusai", "techpack"] // , "Gasper Noe"];

export default function Generate({
  selectedOption1,
  setSelectedOption1,
  selectedOption2,
  setSelectedOption2,
  selectedOption3,
  setSelectedOption3,
}) {

  const checkFirstOption = (option) => {
    if (option === "2d illustration") {
      setSelectedOption2("raf simons aw03 parka");
      setSelectedOption3("techpack")
    } else if (selectedOption1 == "2d illustration" && option !== "2d illustration") {
      setSelectedOption2("bottled water company");
      setSelectedOption3("Nick Knight")
    }
    setSelectedOption1(option)
  }

  const checkSecondOption = (option) => {
    if (option === "raf simons aw03 parka") {
      setSelectedOption1("2d illustration");
      setSelectedOption3("techpack")
    } else if (selectedOption2 == "raf simons aw03 parka" && option !== "raf simons aw03 parka") {
      setSelectedOption1("ad campaign");
      setSelectedOption3("Nick Knight")
    }
    setSelectedOption2(option)
  }

  const checkThirdOption = (option) => {
    if (option === "techpack") {
      setSelectedOption1("2d illustration");
      setSelectedOption2("raf simons aw03 parka");
    } else if (selectedOption3 == "techpack" && option !== "techpack") {
      setSelectedOption1("ad campaign");
      setSelectedOption2("bottled water company");
    }
    setSelectedOption3(option)
  }

  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-2xl font-medium">Generate a</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {options1.map((option) => (
            <button
              key={option}
              onClick={() => checkFirstOption(option)}
              className={`${
                selectedOption1 === option ? "bg-blue-500" : "bg-black"
              } flex w-fit items-center rounded-md px-3 py-2 text-left text-xs text-white outline-none sm:text-sm`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-medium">of</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {options2.map((option) => (
            <button
              key={option}
              onClick={() => checkSecondOption(option)}
              className={`${
                selectedOption2 === option ? "bg-blue-500" : "bg-black"
              } flex w-fit items-center rounded-md px-3 py-2 text-left text-xs text-white outline-none sm:text-sm`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-2xl font-medium">in style of</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {options3.map((option) => (
            <button
              key={option}
              onClick={() => checkThirdOption(option)}
              className={`${
                selectedOption3 === option ? "bg-blue-500" : "bg-black"
              } flex w-fit items-center rounded-md px-3 py-2 text-left text-xs text-white outline-none sm:text-sm`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
