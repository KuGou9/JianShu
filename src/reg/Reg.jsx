import React from 'react';
import {
  RegWrapper,
  RegForm,
  Title,
  FormItem,
  RegLabel,
  RegInput,
  Button,
  Tip,
} from './style';

class Reg extends React.Component {
  constructor() {
    super();
    this.state = {
      telFlag: true,
      passFlag: true,
      passConfirm: true,
    };
  }
  blurHandler = () => {
    if (this.tel.value.length !== 11) {
      this.setState(() => ({
        telFlag: false,
      }));
    }
  };
  passBlurHandler = () => {
    if (this.password.value.length <= 6) {
      this.setState(() => ({
        passFlag: false,
      }));
    }
  };
  passConfirmBlurHandler = () => {
    if (this.password.value !== this.passConfirm.value) {
      this.setState(() => ({
        passConfirm: false,
      }));
    }
  };
  render() {
    const clickHandler = () => {
      console.log('reg');
    };
    return (
      <RegWrapper>
        <RegForm>
          <Title>Welcome to the community</Title>
          <FormItem>
            <RegLabel htmlFor="account">Account:</RegLabel>
            <RegInput
              id="account"
              placeholder="请输入手机号码"
              onBlur={this.blurHandler}
              ref={(input) => {
                this.tel = input;
              }}
              className={this.state.telFlag ? '' : 'error'}
            />
            <Tip className={!this.state.telFlag ? 'show' : 'hidden'}>
              请输入正确的手机号码
            </Tip>
          </FormItem>
          <FormItem>
            <RegLabel htmlFor="password">Password:</RegLabel>
            <RegInput
              id="password"
              type="password"
              onBlur={this.passBlurHandler}
              ref={(input) => {
                this.password = input;
              }}
              className={this.state.passFlag ? '' : 'error'}
            />
            <Tip className={!this.state.passFlag ? 'show' : 'hidden'}>
              密码长度不能少于6位
            </Tip>
          </FormItem>
          <FormItem>
            <RegLabel htmlFor="password">PassConfirm:</RegLabel>
            <RegInput
              id="password"
              type="password"
              onBlur={this.passConfirmBlurHandler}
              ref={(input) => (this.passConfirm = input)}
              className={this.state.passConfirm ? '' : 'error'}
            />
            <Tip className={!this.state.passConfirm ? 'show' : 'hidden'}>
              两次密码不相同
            </Tip>
          </FormItem>
          <Button onClick={clickHandler}>注册</Button>
        </RegForm>
      </RegWrapper>
    );
  }
}

export default Reg;
