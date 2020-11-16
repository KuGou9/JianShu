import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width: 100%;
  background: #fafafa;
`;

export const DetailMain = styled.div`
  width: 777px;
  margin: 0 auto;
`;

export const DetailTitle = styled.div`
  display: block;
  font-size: 25px;
  font-weight: 700;
  height: 80px;
  // 每一行的行高，设置文字之间的间距
  line-height: 80px;
  box-sizing: border-box;
`;

export const DetailImg = styled.div`
  img {
    width: 777px;
  }
  margin: 15px 0;
`;

export const DetailContent = styled.div`
  font-size: 18px;
  vertical-align: center;
  line-height: 35px;
  color: #404040;
`;

export const DetailMainContent = styled.p`
  font-size: 15px;
  color: #404040;
  line-height: 40px;
`;

export const DetailMainContentTitle = styled.p`
  color: #404040;
  line-height: 40px;
  // 设置字体是粗体
  font-height: bold;
`;
