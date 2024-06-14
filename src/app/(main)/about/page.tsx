import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0 py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-4xl font-bold">
            I Am A Freelance Web Developer, and this is my{" "}
            <span className="ytitle">Portfolio</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg">
            I build custom web applications using NextJS, Prisma and
            TailwindCSS. Take a look at my portfolio or my github to see what
            I'm working on at the moment.
          </p>
          <p>
            If you have an existing project or something new you would like me
            to work on. Feel free to reach out to <Link href='hire-me' className="ytitle underline">me</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
