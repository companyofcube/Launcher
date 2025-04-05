import { PropsWithChildren } from "react"
import { useNavigate } from "react-router"

type NavbarItemProps = {
  to: string
  active?: boolean
  disableHover?: boolean
} & PropsWithChildren

export function NavbarItem({
  children,
  to,
  disableHover,
  active,
}: NavbarItemProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className={`group relative h-full px-6 flex items-center justify-center border-r-2 border-black/60
        ${
          disableHover
            ? "hover:bg-transparent"
            : "hover:text-white transition-colors"
        }`}
    >
      <span className='text-xl font-heading font-medium text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 select-none group-hover:bg-none group-hover:bg-white'>
        {children}
      </span>
      {!disableHover && (
        <div
          aria-hidden='true'
          className={`absolute scale-y-0 transition-transform left-0 bottom-0 w-full origin-bottom h-1.5 bg-gradient-to-b from-primary-400 to-primary-500 group-hover:scale-y-100 block
          ${active ? "scale-y-100" : ""}`}
        />
      )}
    </button>
  )
}
