import { FiSearch } from 'react-icons/fi';
import './style.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useState} from 'react';
import api from './services/api';


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

   async function handleAlert() {
    if(input === ''){
      toast.error('Por Favor, preencha o campo de CEP')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    }
    catch{
      toast.error('CEP inexistente');
    }
  }


  return (
    <div className="container">
        <h1 className="title">Buscar CEP</h1>

        <div className="container-input">
          <input
            type="text"
            placeholder="Digite seu CEP:"
            value={input}
            onChange={(e) => setInput(e.target.value) }
          />

          <button className="buttonSearch">
              <FiSearch 
                size={25}
                color='#fff'
                onClick={handleAlert}
              />
          </button>

        </div>
        
        {Object.keys(cep).length > 0 && (
          <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf} </span>
        </main>
        )}

        
        <ToastContainer autoClose={3000}/>

    </div>
  );
}

export default App;
