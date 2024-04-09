import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header w-full">
        <NavLink to="/" className="p-2 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text text-lg">ASHIF's PortFolio</p>
        </NavLink>
        <nav className="flex text-2xl gap-7 font-medium">
            <NavLink to="/about" className={({isActive})=> isActive?'text-blue-500':'text-black-900'} activeClassName="text-blue-500">
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive?'text-blue-500':'text-black-900'} activeClassName="text-blue-500">
                Projects
            </NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive?'text-blue-500':'text-black-900'} activeClassName="text-blue-500">
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
