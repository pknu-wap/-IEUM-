import React from 'react';
import * as Styled from './Header.styles';
import SearchBox from '@/components/common/SearchBox/SearchBox';
import MainIcon from '@/assets/images/mainIcon.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <Styled.HeaderStyles>
      <Styled.HeaderContainer>
        <Styled.TextCoverStyles>
          <Styled.LogoButtonStyles>
            <img src={MainIcon} onClick={handleHomeClick} />
          </Styled.LogoButtonStyles>
          <Styled.IntroduceButtonStyles>
            모아동 소개
          </Styled.IntroduceButtonStyles>
        </Styled.TextCoverStyles>
        <SearchBox />
      </Styled.HeaderContainer>
    </Styled.HeaderStyles>
  );
};

export default Header;
