import { useLocation } from "react-router"
import Logo from "../../assets/images/logo/icon-crop.webp"
import { NavbarItem } from "./NavbarItem"
import { NavbarSpecialItem } from "./NavbarSpecialItem"

type NavbarItem = {
  title: string
  to: string
}

export function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname

  const leftItems: NavbarItem[] = [
    { title: "Jeu", to: "/" },
    { title: "Actualités", to: "/articles" },
    { title: "Communauté", to: "/community" },
  ]

  const rightItems: NavbarItem[] = [{ title: "Connexion", to: "/" }]

  return (
    <section
      style={{
        color: "black",
        backgroundColor: "rgba(33, 21, 16, 0.7)",
        backdropFilter: "blur(20px)",
        height: "100%",
        width: "100%",
        borderRadius: 16,
      }}
    >
      <div className='flex justify-between h-full'>
        {/* LEFT ITEMS */}
        <div className='flex'>
          <div className='bg-black/30 h-full rounded-l-2xl'>
            <NavbarItem to='/' disableHover>
              <img src={Logo} alt='logo' className='h-12 w-12' />
            </NavbarItem>
          </div>
          <div className='flex '>
            {leftItems.map((item, index) => (
              <NavbarItem
                key={index}
                to={item.to}
                active={item.to === currentPath}
              >
                {item.title}
              </NavbarItem>
            ))}
          </div>
        </div>

        {/* RIGHT ITEMS */}
        <div className='flex'>
          {rightItems.map((item, index) => (
            <NavbarSpecialItem key={index} to={item.to}>
              {item.title}
            </NavbarSpecialItem>
          ))}
        </div>
      </div>
    </section>
  )
}
