import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Reservar from './pages/Reservar'

export default function Rotas (){
    return(
    <Routes>
        
            <Route path='/' element={ <Home />} />
            <Route path='/reservas' element={ <Reservar />} />
            
        
    </Routes>
    )
}