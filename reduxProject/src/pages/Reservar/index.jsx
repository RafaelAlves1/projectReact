import './style.css'
import { MdDelete } from 'react-icons/md'

export default function Reserva(){
    return(
        <div>
            <h1 className='title'>Voce solicitou 1 reservas</h1>

            <div className="reservas">
                <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceio" />
                <strong>Viagem 7dias maceio</strong>
                <span>Quantidade:2</span>

            <button
                type='button'
                onClick={()=>{}}
            >
                <MdDelete 
                    size={20}
                    color="#191919"
                />
            </button>
            </div>

            <footer>
                <button
                    type='button'
                >Solicitar Reservas</button>
            </footer>
        </div>
    )
}