import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="site-nav__inner">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/pokemon" end>Pokémon</NavLink>
        <NavLink to="/sobre" end>Sobre</NavLink>
      </div>
    </nav>
  )
}

export default Navbar