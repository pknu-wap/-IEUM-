import React from 'react';
import * as Styled from './IntroduceBox.styles';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // 링크 및 마크다운 확장 지원
import rehypeRaw from 'rehype-raw'; // HTML 태그를 지원하려면 필요
import rehypeSanitize from 'rehype-sanitize';

const markdownContent = `
### 💻 프로그래밍 중앙 동아리 WAP 30기 신입 개발자 회원 모집 💻

부경대학교 중앙 동아리 WAP은 게임, 웹, 앱 등 다양한 분야의 프로젝트를 중심으로 활동하는 동아리입니다.  
분야, 주제, 개발 환경 등을 자율적으로 선택하여 한 학기 동안 팀원들과 결과물을 만든 후 발표하는 활동을 합니다.  
이외에도 이번 학기에 테크톡, 깃 세미나, 배포 세미나, MT 등 다양한 행사가 준비되어 있습니다. 🤗

👥 모집 대상: 개발에 관심 있는 누구나  
💵 회비: 한 학기당 25,000원

🗓️ 2025-1 WAP 신입 모집 일정
1. 모집 마감 : 2월 1일(토) ~ 2월 21일(금) 23시 59분  
2. 서류 합격자 발표 : 2월 22일(토) 18시  
3. 면접 일정 : 2월 27일(목) ~ 3월 1일(토)  
4. 최종 합격자 발표 : 3월 2일(일) 18시  
5. 신입생 OT & 프로젝트 세미나: 3월 4일(화)  
6. 개총 & 팀 빌딩: 3월 8일(토)  

🏆 WAP의 성과  
WAP은 2024학년도 2학기 학술 분과 우수 동아리로 선정되었습니다.  
또한, 동아리 활동을 통해 쌓은 경험을 바탕으로 매년 대외활동 합격자와 수상자를 다수 배출하고 있습니다.  
지난해에는 소프트웨어 마에스트로, 우아한 테크코스, SSAFY, 네이버 부스트 캠프 등 주요 프로그램에 합격자를 배출했으며, 교내 프로그래밍 경진대회 대상을 포함한 다양한 수상 기록을 달성하였습니다.  

⭐ WAP 부원이 가지는 혜택 5가지  
1. 협업하며 프로젝트를 진행하고, 직접 결과물을 만들어 개발 경험을 쌓을 수 있습니다.  
2. 프로젝트 결과물을 동아리 부원 및 외부인에게 발표하고 시연할 수 있습니다.  
3. 테크톡 활동을 통해 다양한 개발 지식을 배우고 실력을 키울 수 있습니다.  
4. BITs(Busan IT student)의 구성원으로서 타 학교 IT동아리와 교류할 수 있습니다.  
5. 동아리에서 개최하는 다양한 행사에 참여할 수 있습니다.  

📢 공지 사항  
1. 탈락한 지원자에게는 별도의 탈락 통보 메시지가 발송되지 않습니다.  
2. 면접은 오프라인으로 진행되며, 면접 장소는 서류 합격자 발표 후 안내됩니다  
(대면이 불가한 경우 오픈채팅방으로 문의 부탁드립니다.)  
3. 신입 회원은 신입 필수 활동에 반드시 참여해야 하며, 합당한 사유 없이 불참하실 경우 불이익이 주어집니다.  

📝 **[신청 폼 바로가기](https://docs.google.com/forms/d/e/1FAIpQLSc41UNglvB3Y-8SbwjGk5aBh7WTtwlyf5FPJJLwWooRyafLZw/viewform?usp=header)**  

🔗 **관련 링크**  
- [공식 Github](https://github.com/pknu-wap)  
- [공식 인스타](https://www.instagram.com/pknu_wap/?hl=ko)  

✉️ **문의 사항**  
- [카톡 오픈채팅](https://open.kakao.com/o/seDEdF9g)  
- 부경대학교 WAP 인스타그램 DM [@pknu_wap](https://www.instagram.com/pknu_wap)  
- 회장: 이제희 010-8512-3292  
`;

const IntroduceBox = ({
  sectionRefs,
}: {
  sectionRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) => {
  return (
    <Styled.IntroduceBoxWrapper
      ref={(el) => {
        sectionRefs.current[2] = el;
      }}>
      <Styled.IntroduceTitle>소개글</Styled.IntroduceTitle>
      <Styled.IntroduceContentBox>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // GitHub 마크다운 지원
          rehypePlugins={[rehypeRaw, rehypeSanitize]} // HTML 태그 지원
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target='_blank' rel='noopener noreferrer' />
            ),
          }}>
          {markdownContent}
        </ReactMarkdown>
      </Styled.IntroduceContentBox>
    </Styled.IntroduceBoxWrapper>
  );
};

export default IntroduceBox;
