import React from 'react';
import { connect } from 'react-redux';
import {
  LoginWrapper,
  LoginForm,
  Title,
  FormItem,
  LoginLabel,
  LoginInput,
  Button,
} from './style';
import { login } from '../store/action/login';

class Login extends React.Component {
  render() {
    const clickHandler = () => {
      this.props.login();
    };
    return (
      <LoginWrapper>
        <LoginForm>
          <Title>Login</Title>
          <FormItem>
            <LoginLabel htmlFor="account">Account:</LoginLabel>
            <LoginInput id="account" placeholder="请输入手机号码" />
          </FormItem>
          <FormItem>
            <LoginLabel htmlFor="password">Password:</LoginLabel>
            <LoginInput id="password" type="password" />
          </FormItem>
          <Button onClick={clickHandler}>登陆</Button>
        </LoginForm>
      </LoginWrapper>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProp, { login })(Login);
