import React from 'react';
import Header from '@/components/common/Header/Header';
import InfoBox from '@/pages/ClubDetailPage/components/InfoBox/InfoBox';
import IntroduceBox from '@/pages/ClubDetailPage/components/IntroduceBox/IntroduceBox';
import * as Styled from '../MainPage/MainPage.styles';
import Footer from '@/components/@common/Footer/Footer';

const ClubDetailPage = () => {
  return (
    <>
      <Header />
      <Styled.PageContainer>
        <InfoBox />
        <IntroduceBox />
      </Styled.PageContainer>
      <Footer />
    </>
  );
};

export default ClubDetailPage;
