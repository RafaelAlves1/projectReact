import './home.css'

import Header from '../Header';
import Eu from '../../img/Eu.png';
import Git from  '../../img/github.svg'
import Linkedin from  '../../img/linkedin.svg'

export default function Home(){
    return(
        <>
            <Header />
            <div className="h" id='home'>
                
            
            <div className="container">
                <div className="leftText">
                    <div className="titleText">
                        <h1>Rafael Alves</h1>
                        
                    </div>
                    <div className="descText">
                        <p>
                        Desenvolvedor Front-end.
                        </p>
                    </div>

                    <div className="h-links">
                        <a href="https://github.com/RafaelAlves1" target="_blank">
                            <img src={Git} alt="" />
                        </a>

                        <a href="https://www.linkedin.com/in/rafael-alves-2608a8206/" target="_blank">
                            <img src={Linkedin} alt="" />
                        </a>
                    </div>
                </div>
                
                <div className="rightImg">
                    <img src={Eu}/>
                </div>
            </div> 

            </div>

        </>
    );
}