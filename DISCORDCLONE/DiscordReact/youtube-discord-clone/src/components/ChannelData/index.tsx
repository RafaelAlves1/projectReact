import React, {useRef, useEffect } from "react";

import ChannelMessage, {Mention} from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messegesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {

    const div = messegesRef.current;

    if(div) {

      div.scrollTop = div.scrollHeight;

    }

  }, [messegesRef]);
  return (
  
    <Container>

    <Messages ref={messegesRef}>
      {Array.from(Array(25).keys()).map((n) =>(
      
      <ChannelMessage
      author="Rafael Alves"
      date="22/10/2021"
      content="Boa Tarde Rapaziada!"
      />

      ))}
        <ChannelMessage
        author="Runas Help"
        date="22/10/2021"
        content={
                
        <>

        <Mention>@Rafael Alves</Mention>, Por gentileza, NÃO spammar mensagens!     
        </>
                
        }

        hasMention
        isBot
              
        />


    </Messages>

    

    <InputWrapper>
      <Input type="text" placeholder="Conversar em #chat-livre" />
      <InputIcon />
    </InputWrapper>
    </Container>

 
  );
  
};

export default ChannelData;