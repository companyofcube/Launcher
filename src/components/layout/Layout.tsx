import { PropsWithChildren } from "react"
import { Navbar } from "../navbar/Navbar"

export function Layout({ children }: PropsWithChildren) {
  return (
    <section>
      <div
        style={{
          zIndex: 100,
          position: "fixed",
          top: 12,
          left: 12,
          height: 72,
          width: "calc(100% - 24px)",
        }}
      >
        <Navbar />
      </div>

      <div>{children}</div>
    </section>
  )
}
