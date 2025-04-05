import { PropsWithChildren } from "react"
import { useNavigate } from "react-router"

type NavbarItemProps = {
  to: string
} & PropsWithChildren

export function NavbarSpecialItem({ children, to }: NavbarItemProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to)}
      className='group relative h-full px-6 flex items-center justify-center border-l-2 border-black/60 bg-gradient-to-br from-secondary-800 to-secondary-950 hover:from-40% shiny-outline'
    >
      <span className='flex items-center space-x-2'>
        <span className='text-xl font-heading font-medium text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 select-none group-hover:bg-none group-hover:bg-white bg-none bg-white'>
          {children}
        </span>
      </span>
    </button>
  )
}
