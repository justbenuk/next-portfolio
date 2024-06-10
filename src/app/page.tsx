import Image from "next/image";
import { TbBrandNextjs, TbBrandTailwind, TbBrandPrisma, TbBrandMongodb, TbBrandAws } from "react-icons/tb";

export default function Home() {
  return (
  <div className="max-w-7xl mx-auto text-center md:text-start text-gray-600">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl">I'm Learning To <span className="font-bold text-yellow-500">Code</span></h1>
          <p className="py-4">I am a Fullstack Developer spending all my free time learning to code Javascript. Im currently working on projects ranging from blogs to e-commerce stores and more.</p>
        </div>
        <div className="col-span-1">
          <Image src='/me.png' alt='a profile picture of me' height={300} width={300} className="mx-auto rounded-full border-5 border-yellow-500" />
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
            <h1 className="font-bold text-lg">Tech Stack</h1>
            <ul className="flex flex-col md:flex-row items-center gap-2 text-lg">
              <li className="flex flex-row items-center gap-2"><span><TbBrandNextjs className="text-2xl text-yellow-500"/></span>NextJS</li>
              <li className="flex flex-row items-center gap-2"><span><TbBrandTailwind className="text-2xl text-yellow-500"/></span>TailwindCSS</li>
              <li className="flex flex-row items-center gap-2"><span><TbBrandPrisma className="text-2xl text-yellow-500"/></span>Prisma</li>
              <li className="flex flex-row items-center gap-2"><span><TbBrandMongodb className="text-2xl text-yellow-500"/></span>MongoDB</li>
              <li className="flex flex-row items-center gap-2"><span><TbBrandAws className="text-2xl text-yellow-500"/></span>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
