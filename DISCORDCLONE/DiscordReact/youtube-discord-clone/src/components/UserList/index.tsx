import React from "react";

import { Container, Role, User, Avatar  } from './styles';

interface UserProps {
  nickname: string;
  isBot ?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot': '' } />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span> }
    </User>
  )
}


const UserList: React.FC = () => {

  return (
  
    <Container>

        <Role> Owner - 1</Role>
        <UserRow nickname="Rafael Alves" />

        <Role> Bots - 1</Role>
        <UserRow nickname="Runas Help" isBot />


        {/* Ferro */}
        <Role>Ferro - 4</Role>
        <UserRow nickname="Players Ferro" />
        <UserRow nickname="Players Ferro" />
        <UserRow nickname="Players Ferro" />
        <UserRow nickname="Players Ferro" />



        {/* Bronze */}
        <Role>Bronze - 4</Role>
        <UserRow nickname="Players Bronze" />
        <UserRow nickname="Players Bronze" />
        <UserRow nickname="Players Bronze" />
        <UserRow nickname="Players Bronze" />
        

        {/* Prata */}
        <Role>Prata - 4</Role>
        <UserRow nickname="Players Prata" />
        <UserRow nickname="Players Prata" />
        <UserRow nickname="Players Prata" />
        <UserRow nickname="Players Prata" />
        

        {/* Ouro */}
        <Role>Ouro - 4</Role>
        <UserRow nickname="Players Ouro" />
        <UserRow nickname="Players Ouro" />
        <UserRow nickname="Players Ouro" />
        <UserRow nickname="Players Ouro" />


        {/* Platina */}
        <Role>Platina - 4</Role>
        <UserRow nickname="Players Platina" />
        <UserRow nickname="Players Platina" />
        <UserRow nickname="Players Platina" />
        <UserRow nickname="Players Platina" />


        {/* Diamante */}
        <Role>Diamante - 4</Role>
        <UserRow nickname="Players Diamante" />
        <UserRow nickname="Players Diamante" />
        <UserRow nickname="Players Diamante" />
        <UserRow nickname="Players Diamante" />
        

        {/* Mestre */}
        <Role>Mestre - 3</Role>
        <UserRow nickname="Players Mestre" />
        <UserRow nickname="Players Diamante" />
        <UserRow nickname="Players Diamante" />
        

        {/* Grao Mestre */}
        <Role>Grao Mestre - 2</Role>
        <UserRow nickname="Players Grao Mestre" />
        <UserRow nickname="Players Grao Mestre" />
       
       {/* Desafiante */}

        <Role>Desafiante - 1</Role>
        <UserRow nickname="Players Desafiante" />
        

        

        <Role>Offline - 7</Role>
       
        <UserRow nickname="Players Unranked" />
        <UserRow nickname="Players Unranked" />
        <UserRow nickname="Players Unranked" />
        <UserRow nickname="Players Unranked" />
        <UserRow nickname="Players Unranked" />
        <UserRow nickname="Players Unranked" />
        



    </Container>

 
  );
  
};

export default UserList;