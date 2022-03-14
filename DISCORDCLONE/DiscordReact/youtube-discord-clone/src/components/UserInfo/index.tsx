import React from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingIcon } from './styles';

const UserInfo: React.FC = () => {

  return (
  
    <Container>

      <Profile>
      <Avatar />

      <UserData>
        <strong>Rafael Alves</strong>
        <span>#5054</span>
      </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingIcon />
      </Icons>

    </Container>

 
  );
  
};

export default UserInfo;