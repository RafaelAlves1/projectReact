import './style.css'

import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg'

export default  function Header() {
  return (
      <header className='container'>
          <Link to='/'>
            <img className="logo" src={Logo} alt="Logo do projeto" />
          </Link>
          
          <Link to='/reservas' className="reserva">
            <div >
                <strong>Minhas reservas</strong>
                <span>0 reservas</span>
            </div>
          </Link>



      </header>
  )
}

