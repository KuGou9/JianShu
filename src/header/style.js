import styled from 'styled-components';
import LogoPic from '../static/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
`;

export const Logo = styled.div`
  background: url(${LogoPic});
  background-size: 100px 56px;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
`;

export const Nav = styled.div`
  width: 960px;
  height: 56px;
  flex: 3;
`;

export const NavItem = styled.div`
  width: 100px;
  height: 56px;
  line-height: 56px;
  margin: 0 10px;
  text-align: left;
  font-size: 17px;
  font-height: 1.5;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  i {
    width: 30px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    box-sizing: border-box;
    margin: 13px 0;
  }
`;
export const SearchWrapper = styled.div`
  height: 56px;
  box-sizing: border-box;
  float: left;
  position: relative;
  margin-left: 15px;
  i {
    width: 38px;
    height: 38px;
    line-height: 38px;
    margin: 9px auto;
    text-align: center;
    border-radius: 19px;
    background: #eeeeee;
    position: absolute;
    right: 5px;
    &.focus {
      background: #969696;
      color: white;
    }
  }
`;

export const Search = styled.input.attrs({
  placeholder: '搜索',
})`
  width: 200px;
  height: 38px;
  box-sizing: border-box;
  padding: 0 19px;
  margin: 9px 0;
  border-radius: 19px;
  border: none;
  outline: none;
  &::placeholder {
    color: #999;
  }
  float: left;
  background: #eeeeee;
  &.focus {
    width: 300px;
  }
  transition: all 0.3s ease-in;
`;

export const SearchInfo = styled.div`
  width: 290px;
  height: 100px;
  background: white;
  position: absolute;
  margin-top: 57px;
  color: #999;
  text-align: center;
  z-index: 9;
`;

export const ButtomWrapper = styled.div`
  width: 300px;
  height: 59px;
  flex: 1;
`;

export const Button = styled.button`
  width: 100px;
  height: 38px;
  margin: 9px 15px;
  border-radius: 19px;
  border: none;
  outline: none;
  background: white;
  font-size: 15px;
  &.reg {
    border: 1px solid #ea6f5a;
    color: #ea6f5a;
  }
  &.writing {
    background: #ea6f5a;
    color: white;
    text-align: center;
    i {
      width: 3opx;
      height: 3opx;
      padding: 0;
      line-height: 38px;
      text-align: center;
      display: inline-block;
      box-sizing: border-box;
    }
  }
`;
