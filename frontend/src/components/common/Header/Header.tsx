import React from 'react';
import * as Styled from './Header.styles';

const Header = () => {
  return (
    <Styled.HeaderStyles>
      <Styled.TextCoverStyles>
        <Styled.LogoButtonStyles>Moadong</Styled.LogoButtonStyles>
        <Styled.IntroduceButtonStyles>모아동 소개</Styled.IntroduceButtonStyles>
      </Styled.TextCoverStyles>
      <Styled.SearchBoxStyles>
        <Styled.SearchInputStyles placeholder='어떤 동아리를 찾으세요?' />
        <Styled.SearchButton />
      </Styled.SearchBoxStyles>
    </Styled.HeaderStyles>
  );
};

export default Header;
