import './customers.css';
import { FiUser  } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import firebase from '../../services/firebaseConnection';
import { useState } from 'react';

import { toast } from 'react-toastify'

export default function Customers() {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');

  async function handleAdd(e){
    e.preventDefault();
   
    if(nomeEmpresa !== '' && cnpj !=='' && endereco !== ''){
      await firebase.firestore().collection('customers')
      .add({
        nomeEmpresa: nomeEmpresa,
        cnpj: cnpj,
        endereco: endereco
      })
      .then(()=> {
        setNomeEmpresa('');
        setCnpj('');
        setEndereco('');
        toast.info('Empresa cadastradas');
      })
      .catch((error)=>{
        console.log(error);
        toast.error('Erro ao cadastrar')
      })
    }else{
      toast.error('Preencha os campos!')
    }

  }
  
  return (
    <div>
      
      <Header />  

      <div className='content'>
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className='container'>
          <form className='form-profile customers' onSubmit={handleAdd}>
            <label>Nome da empresa</label>
            <input type="text" placeholder='Nome da Sua Empresa' value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value) } />
            
            <label>CNPJ</label>
            <input type="text" placeholder='CNPJ' value={cnpj} onChange={(e) => setCnpj(e.target.value) } />
           
            <label>Endereço</label>
            <input type="text" placeholder='Endereço da Sua Empresa' value={endereco} onChange={(e) => setEndereco(e.target.value) } />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
        
      
    </div>
    </div>
  )
}