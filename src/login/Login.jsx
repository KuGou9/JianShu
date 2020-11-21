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
  Tip,
} from './style';
import { login } from '../store/action/login';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      telFlag: true,
    };
  }
  render() {
    const clickHandler = () => {
      if (this.state.telFlag) {
        this.props.login();
        const token = new Date() + this.tel.value;
        localStorage.setItem('token', token);
      }
    };
    const blurHandler = () => {
      if (this.tel.value.length !== 11) {
        this.setState(() => ({ telFlag: false }));
      }
    };
    return (
      <LoginWrapper>
        <LoginForm>
          <Title>Login</Title>
          <FormItem>
            <LoginLabel htmlFor="account">Account:</LoginLabel>
            <LoginInput
              id="account"
              placeholder="请输入手机号码"
              ref={(input) => {
                this.tel = input;
              }}
              onBlur={blurHandler}
              className={this.state.telFlag ? '' : 'error'}
            />
            <Tip className={!this.state.telFlag ? 'show' : 'hidden'}>
              手机号码不合法
            </Tip>
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
