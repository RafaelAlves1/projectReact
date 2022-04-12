import './header.css';

import Sobre from '../../img/Male User.svg';
import Contato from '../../img/Contact.svg';
import Inicio from '../../img/Home.svg';
import Projetos from '../../img/Project Management.svg';

export default function Header(){
    return(
        <div className="header">
            <div className="headerContainer">
                <div className="logo">
                    <span className='message'>Rafael A.</span>
                </div>
                <nav className="menu">
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre</a>
                    <a href="#project">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>

                <nav className='menuMobile'>
                    <a href="#home"><img src={Inicio} alt="" /></a>
                    <a href="#about"><img src={Sobre} alt="" /></a>
                    <a href="#project"><img src={Projetos} alt="" /></a>
                    <a href="#contact"><img src={Contato} alt="" /></a>
                </nav>

                

            </div>
        </div>
    );
}