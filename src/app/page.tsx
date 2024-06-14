import Hero from "@/components/hero/hero";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandPrisma,
  TbBrandMongodb,
  TbBrandTypescript,
} from "react-icons/tb";
import Image from "next/image";
import AnimatedDiv from "@/components/ui/animated-div";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl px-6 lg:px-0 mx-auto py-2">
        <div className="flex flex-col md:flex-row items-center justify-center text-lg gap-2 lg:gap-10">
          <p className="ytitle font-bold">Tech Stack</p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <li className="flex flex-row gap-2 items-center justify-center text-white">
              <span>
                <TbBrandNextjs className="text-xl" />
              </span>{" "}
              NextJS
            </li>
            <li className="flex flex-row gap-2 items-center justify-center text-white">
              <span>
                <TbBrandPrisma className="text-xl" />
              </span>{" "}
              Prisma
            </li>
            <li className="flex flex-row gap-2 items-center justify-center text-white">
              <span>
                <TbBrandTailwind className="text-xl" />
              </span>{" "}
              TailwindCSS
            </li>
            <li className="flex flex-row gap-2 items-center justify-center text-white">
              <span>
                <TbBrandMongodb className="text-xl" />
              </span>{" "}
              MongoDB
            </li>
            <li className="flex flex-row gap-2 items-center justify-center text-white">
              <span>
                <TbBrandTypescript className="text-xl" />
              </span>{" "}
              Typescript
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
