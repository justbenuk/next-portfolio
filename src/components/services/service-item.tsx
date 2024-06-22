import { ServiceItemProps } from "@/types"
export default function ServiceItem({description, title}: ServiceItemProps) {
  return (
      <div className="flex flex-col justify-center">
        <h1 className="uppercase ytitle text-sm font-bold">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
  )
}
