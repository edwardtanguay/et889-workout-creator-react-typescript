import { NavLink } from "react-router-dom"

const DropdownLink = ({
  to,
  children,
  toggleMenu,
}: {
  to: string
  children: React.ReactNode
  toggleMenu: () => void
}) => {
  return (
    <NavLink
      onClick={toggleMenu}
      to={to}
      className="py-5 w-3/4 uppercase bg-green-500 [&.active]:bg-green-600 hover:bg-green-600 transition rounded text-blue-50 text-xl text-center"
    >
      {children}
    </NavLink>
  )
}

export default DropdownLink
