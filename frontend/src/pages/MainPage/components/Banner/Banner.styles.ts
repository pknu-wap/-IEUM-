import styled from 'styled-components';

export interface BannerProps {
  backgroundImage?: string;
}

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  position: relative;
`;

export const BannerWrapper = styled.div<BannerProps>`
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: auto;
  aspect-ratio: 1180 / 316;
  border-radius: 26px;
  overflow: hidden;
  background-color: transparent;
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    `}
`;

export const SlideWrapper = styled.div<{ isAnimating: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  ${({ isAnimating }) =>
    isAnimating
      ? 'transition: transform 0.5s ease-in-out;'
      : 'transition: none;'}
`;

export const BannerItem = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 1;
`;

export const SlideButton = styled.button`
  background-color: transparent;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;
