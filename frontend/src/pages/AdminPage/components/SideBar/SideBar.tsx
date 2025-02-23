import React, { useState } from 'react';
import * as Styled from './SideBar.styles';
import defaultLogo from '@/assets/images/defaultLogo.png';

const tabLabels = ['동아리 정보 및 태그', '소개 정보 수정', '회원 정보 관리'];

const SideBar = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);

    };

    return (
        <Styled.SidebarWrapper>
            <Styled.SidebarHeader>설정</Styled.SidebarHeader>
            <Styled.ClubLogo src={defaultLogo} alt={"dasf"}></Styled.ClubLogo>
            <Styled.ClubTitle>WAP</Styled.ClubTitle>
            <Styled.divider />

            <Styled.SidebarButtonContainer>
                {tabLabels
                    .map((label, index) => (
                        <Styled.SidebarButton
                            key={label}
                            className={activeTab === index ? 'active' : ''}
                            onClick={() => handleTabClick(index)}>
                            {label}
                        </Styled.SidebarButton>
                    ))}

            </Styled.SidebarButtonContainer>
        </Styled.SidebarWrapper>
    );
};

export default SideBar;