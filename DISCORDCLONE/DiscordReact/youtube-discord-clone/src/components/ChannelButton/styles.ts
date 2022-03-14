import styled from 'styled-components';
import { Hashtag} from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color .2s;

  >div {
    display: flex;
    align-items: center;

    
  }

  >div span {
    color: var(--senary);
    margin-left: 5px;
  }

  >div:nth-child(2) svg {
    display: none;
  }

  

  

  &:hover, &.active {

    background-color: var(--quinary);

    > div span {

      color: var(--white);
    }

    >div:nth-child(2) svg {
    display: flex;
  }

    
  }
`;
export const HashtagIcon = styled(Hashtag)`

  width:20px;
  height:20px;
  
  color: var(--symbol);


`;

export const InviteIcon = styled(PersonAdd)`

  width:20px;
  height:20px;

  margin-right: 5px;
  
  color: var(--symbol);
  transition:  color .2s;

  cursor: pointer;
  &:hover {
    color:var(--white);
  }
`;

export const SettingIcon = styled(Settings)`
  width:20px;
  height:20px;
  
  color: var(--symbol);
  transition:  color .2s;

  cursor: pointer;
  &:hover {
    color:var(--white);
  }
`;