import styled from 'styled-components';

export const HomeWrapper = styled.div``;

export const HomeLeft = styled.div`
  width: 700px;
  height: 300px;
  float: left;
  box-sizing: border-box;
  margin-left: 18%;
  margin-right: 1%;
`;

export const HomeRight = styled.div`
  width: 300px;
  height: 300px;
  float: left;
  box-sizing: border-box;
  margin-left: 1%;
  margin-right: 8%;
`;

export const HomeLeftItem = styled.div`
  width: 700px;
  height: 180px;
  box-sizing: border-box;
  background: white;
  display: block;
  text-align: left;
  vertical-align: middle;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  color: black;
  .content {
    width: 518px;
    display: inline-block;
    margin: 0 5px;
    .title {
      display: block;
      font-size: 18px;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
    }
    .decr {
      font-size: 15px;
      height: 130px;
      line-height: 30px;
      color: #999;
    }
  }
  img {
    width: 150px;
    border-radius: 3px;
  }
`;

export const HomeRightList = styled.div`
  margin-top: 10px;
  img {
    width: 100%;
  }
`;
