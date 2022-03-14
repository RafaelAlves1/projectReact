import './projectItems.css'


export default function ProjectItems({img, link, nome,}){
    return(
       
            <>
                
            <div className='p-i'>
                <div className="imgProject">
                    <img src={img} alt="" className="p-img" />
                </div>  
                <div className='pi-name'>
                    <h2>{nome}</h2>
                </div>
                <div className="ancora">
                    <a href={link} target="_blank" rel="noreferrer"  >
                        Visualizar Projeto
                    </a>
                </div>

                

            </div>

            </>

    );
}