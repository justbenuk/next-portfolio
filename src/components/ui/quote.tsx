import { QuoteProps } from "@/types"
export default function Quote({text}: QuoteProps) {
  return (
    <blockquote className="text-center text-4xl text-white"><span className="ytitle">&quot;</span>{text}<span className="ytitle">&quot;</span></blockquote>
  )
}
