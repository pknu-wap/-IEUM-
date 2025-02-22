import React from 'react';
import * as Styled from './InfoBox.styles';
import { InfoList } from '@/types/Info';

const infoData: InfoList[] = [
  {
    title: '모집정보',
    descriptions: [
      { label: '모집기간', value: '2025.02.24' },
      { label: '모집대상', value: '부경대학교 재학생' },
    ],
  },
  {
    title: '동아리정보',
    descriptions: [
      { label: '회장이름', value: '이제희' },
      { label: '전화번호', value: '010-1234-5678' },
    ],
  },
];

const InfoBox = ({
  sectionRefs,
}: {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) => {
  return (
    <Styled.InfoBoxWrapper>
      {infoData.map((info, index) => (
        <Styled.InfoBox
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}>
          <Styled.Title>{info.title}</Styled.Title>
          <Styled.DescriptionContainer>
            {info.descriptions.map((desc, idx) => (
              <Styled.DescriptionWrapper key={`${desc.label}-${idx}`}>
                <Styled.LeftText>{desc.label}</Styled.LeftText>
                <Styled.RightText>{desc.value}</Styled.RightText>
              </Styled.DescriptionWrapper>
            ))}
          </Styled.DescriptionContainer>
        </Styled.InfoBox>
      ))}
    </Styled.InfoBoxWrapper>
  );
};

export default InfoBox;
