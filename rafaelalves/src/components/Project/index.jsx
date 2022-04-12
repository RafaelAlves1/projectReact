import './project.css'
import {products} from '../../data.js'
import ProjectItems from '../ProjectItems';

export default function Project(){
    return(
        
            <div className="p" id='project'>
                <div className="containerProject">
                    <div className="textProject">
                        <h1>Projetos</h1>
                    </div>

                    <div className="pl-list">
                        {products.map((item)=>(
                        <ProjectItems key={item.id} img={item.img} link={item.link} nome={item.nome} tech1={item.tech1} tech2={item.tech2} tech3={item.tech3} alt="Projetos-Realizados" />
                        
                        ))}
                    </div>
                </div>
            </div>

    );
}