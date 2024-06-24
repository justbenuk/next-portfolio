import { Spinner } from "@nextui-org/react"
export default function DashboardLoading(){
  return (
  <div className="min-h-screen flex flex-col items-center justify-center"><Spinner label='Loading' color="warning" /></div>
  )
}
