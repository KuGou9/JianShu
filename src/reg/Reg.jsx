import React from 'react';
import {
  RegWrapper,
  RegForm,
  Title,
  FormItem,
  RegLabel,
  RegInput,
  Button,
} from './style';

class Reg extends React.Component {
  render() {
    const clickHandler = () => {
      this.props.login();
    };
    return (
      <RegWrapper>
        <RegForm>
          <Title>Welcome to the community</Title>
          <FormItem>
            <RegLabel htmlFor="account">Account:</RegLabel>
            <RegInput id="account" placeholder="请输入手机号码" />
          </FormItem>
          <FormItem>
            <RegLabel htmlFor="password">Password:</RegLabel>
            <RegInput id="password" type="password" />
          </FormItem>
          <FormItem>
            <RegLabel htmlFor="password">PassConfirm:</RegLabel>
            <RegInput id="password" type="password" />
          </FormItem>
          <Button onClick={clickHandler}>注册</Button>
        </RegForm>
      </RegWrapper>
    );
  }
}

export default Reg;
