import React from 'react';
import * as Styled from './ClubDetailHeader.styles';
import ClubProfile from '@/pages/ClubDetailPage/components/ClubProfile/ClubProfile';
import ClubApplyButton from '@/pages/ClubDetailPage/components/ClubApplyButton/ClubApplyButton';

const ClubDetailHeader = () => {
  return (
    <Styled.ClubDetailHeaderContainer>
      <ClubProfile
        name={'WAP'}
        classification={'중동'}
        division={'학술'}
        tags={['프로젝트', '소프트웨어']}
      />
      <ClubApplyButton />
    </Styled.ClubDetailHeaderContainer>
  );
};

export default ClubDetailHeader;
