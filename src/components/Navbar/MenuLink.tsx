import { NavLink } from "react-router-dom"

const MenuLink = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => {
  return (
    <NavLink
      to={to}
      className={`uppercase hidden md:block text-xl p-2 text-green-500 hover:text-green-600 transition [&.active]:text-green-600 [&.active]:underline`}
    >
      {children}
    </NavLink>
  )
}

export default MenuLink
