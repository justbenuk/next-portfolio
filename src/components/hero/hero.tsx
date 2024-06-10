import AnimatedWord from "../animations/animated-word"
import AnimatedLetter from "../animations/animated-letter"
export default function Hero() {

    return (
    <div className="max-w-7xl mx-auto min-h-[80dvh] flex flex-col items-center justify-center">
      <AnimatedWord text="I'm Learning To Code" />
      <AnimatedLetter text="by building web applications using NextJS, Prisma, TailwindCSS and MongoDB"/>
    </div>
  )
}
