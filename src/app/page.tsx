import Hero from "@/components/hero/hero";
import { TbBrandNextjs, TbBrandTailwind, TbBrandPrisma, TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
export default function Home() {
  return (
  <>
      <Hero />
      <div className="max-w-7xl px-6 lg:px-0 mx-auto py-2">
        <div className="flex flex-col md:flex-row items-center justify-center text-lg font-bold gap-2 lg:gap-10">
          <p>Tech Stack</p>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <li className="flex flex-row gap-2 items-center justify-center"><span><TbBrandNextjs className="text-xl"/></span> NextJS</li>
            <li className="flex flex-row gap-2 items-center justify-center"><span><TbBrandPrisma className="text-xl"/></span> Prisma</li>
            <li className="flex flex-row gap-2 items-center justify-center"><span><TbBrandTailwind className="text-xl"/></span> TailwindCSS</li>
            <li className="flex flex-row gap-2 items-center justify-center"><span><TbBrandMongodb className="text-xl"/></span> MongoDB</li>
            <li className="flex flex-row gap-2 items-center justify-center"><span><TbBrandTypescript className="text-xl"/></span> Typescript</li>
          </ul>
        </div>
      </div>
    </>
  );
}
