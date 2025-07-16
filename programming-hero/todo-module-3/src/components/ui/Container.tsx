import type { ReactNode } from "react"

type TContainerProps={
    children:ReactNode
}
const Container = ({children}:TContainerProps) => {
  return (
    <div className="h-screen max-w-4xl w-full m-auto">{children}</div>
  )
}

export default Container