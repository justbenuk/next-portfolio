import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 xl:px-0 py-36">
      <blockquote className="text-center text-4xl text-white"><span className="ytitle">&quot;</span>Learning to code is one of the most challenging things I am doing.... But I'm loving it<span className="ytitle">&quot;</span></blockquote>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-10">
        <div>
          <div>
            <h1 className="ytitle uppercase text-xs font-bold">Where Did It Start?</h1>
            <p>Many moons ago I started on a forum here in the uk. I was just a young lad that enjoyed talking to people from across the globe. After a year or two I was aksed if I would help out and become a moderator, I started working on the some of the code in the background making changes to the look and feel of the forum. Thats when I found the bug for coding.</p>
          </div>
          <div className="py-8">
            <h1 className="ytitle uppercase text-xs font-bold">From PHP to WordPress</h1>
            <p>I started to look at other things I could do, I built a few workpress websites for friends mainly using free themes from the internet, but I always felt I could acheive more it I started to learn more. So I started building custom themes and plugins for wordpress.</p>
          </div>
        </div>
        <div>
          <div>
            <h1 className="ytitle uppercase text-xs font-bold">And now what?</h1>
            <p>Overtime I started to move on to more bigger projects that WordPress would not be able to do with out a lot of work. I thought it would be so much easier if I could just build my own web application. I just so happened to stumbnle across a video about React and NextJS, then it hit me. I want to be able to build fullstack applications with NextJS</p>
          </div>
          <div className="py-8">
            <h1 className="ytitle uppercase text-xs font-bold">And Here we are now</h1>
            <p>I am 40 years old, with a full time job, but my passion is learning everything I can. I spend all my freetime building web applications, but i've never really build a portfolio to show them. <span className="ytitle font-bold">Well Now I Have</span>. Im always looking for feed back. So please take a look at some of my projects and let me know what you think</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="mt-6">
          <Link href='/projects' className="border rounded-xl border-[#f4d956] px-8 py-2 hover:bg-[#f4d956] hover:text-black">My Projects</Link>
        </div>
      </div>
    </div>


  );
}
