import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

type ProviderChildren = {
  children: ReactNode
}

export default function Provider({ children }: ProviderChildren) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
