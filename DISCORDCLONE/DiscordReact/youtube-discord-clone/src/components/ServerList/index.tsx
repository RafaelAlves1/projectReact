import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from './style';

const ServerList: React.FC = () => {

  return (

    <Container>

      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={111}/>
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={3}/>
      <ServerButton />
      <ServerButton  hasNotifications/>
      <ServerButton />
      <ServerButton mentions={43}/>
      <ServerButton />
      <ServerButton hasNotifications/>

    </Container>
  );

};


export default ServerList;