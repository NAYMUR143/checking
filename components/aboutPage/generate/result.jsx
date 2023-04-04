import Image from "next/image";

export default function GenerateResult({ result }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <Image src={result} alt={result} width={360} height={360} />
    </div>
  );
}
