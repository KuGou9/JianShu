import styled from 'styled-components';

export const RegWrapper = styled.div`
  text-align: center;
  margin-top: 70px;
  margin-bottom: 10px;
`;

export const RegForm = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  background: #e6e6e6;
  vertical-align: middle;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  display: block;
  font-size: 50px;
  text-align: left;
  padding: 50px 3%;
`;

export const FormItem = styled.div`
  margin: 15px 0;
`;

export const RegLabel = styled.label`
  display: inline-block;
  width: 15%;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: left;
  margin-right: 2%;
`;

export const RegInput = styled.input`
  width: 75%;
  height: 40px;
  border: none;
  &.error {
    outline: 1px solid red;
  }
  outline: none;
`;

export const Button = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 20px;
  border: none;
  outline: none;
  border: 1px solid #ea6f5a;
  background: white;
  color: #ea6f5a;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Tip = styled.div`
  width: 80%;
  margin-left: 21%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 18px;
  color: red;
  &.hidden {
    display: none;
  }
  &.show {
    display: block;
  }
`;
