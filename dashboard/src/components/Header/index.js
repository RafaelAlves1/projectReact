import './header.css';

import Avatar from '../../assets/avatar.png'

import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

export default function Header(){

  const { user } = useContext(AuthContext);

  return(
    <div className='sidebar'>
        <div>
          <img src={ user.avatarUrl === null ? Avatar : user.avatarUrl } alt= "Foto de Perfil" />
        </div>

        <Link to="/dashboard">
          <FiHome color="#fff" size={24} />
          chamados
        </Link>

        <Link to="/customers">
          <FiUser color="#fff" size={24} />
            Clientes
        </Link>

        <Link to="/profile">
          <FiSettings color="#fff" size={24} />
          Perfil
        </Link>
    </div>
  )
}