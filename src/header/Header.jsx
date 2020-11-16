import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  Search,
  SearchInfo,
  ButtomWrapper,
  Button,
} from './style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchAction from '../store/action/search';
import * as loginAction from '../store/action/login';

class Header extends React.Component {
  render() {
    const getList = (show) => {
      return show ? <SearchInfo>No Data</SearchInfo> : '';
    };
    return (
      <HeaderWrapper>
        <Logo
          onClick={() => {
            this.props.history.push('/');
          }}
        />
        <Nav>
          <NavItem
            className="left"
            style={{ color: '#ea6f5a' }}
            onClick={() => {
              this.props.history.push('/');
            }}
          >
            <i className="iconfont">&#xe60c;</i>
            首页
          </NavItem>
          <NavItem className="left">
            <i className="iconfont">&#xe6d4;</i>
            下载App
          </NavItem>
          <SearchWrapper>
            <Search
              className={this.props.search ? 'focus' : ''}
              // 要采用this.props进行调用
              onFocus={this.props.searchAction.searchFocus}
              onBlur={this.props.searchAction.searchBlur}
            />
            <i className={this.props.search ? 'iconfont focus' : 'iconfont'}>
              &#xe60d;
            </i>
            {getList(this.props.search)}
          </SearchWrapper>
          <NavItem
            className="right"
            onClick={() => {
              if (!this.props.login) {
                this.props.history.push('/login');
              } else {
                console.log(2134);
                this.props.loginAction.logout();
              }
            }}
          >
            {this.props.login ? '退出' : '登录'}
          </NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe605;</i>
          </NavItem>
        </Nav>
        <ButtomWrapper>
          <Button
            className="reg"
            onClick={() => {
              this.props.history.push('/reg');
            }}
          >
            注册
          </Button>
          <Button className="writing">
            <i className="iconfont">&#xe742;</i>
            写文章
          </Button>
        </ButtomWrapper>
      </HeaderWrapper>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    search: state.search,
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchAction: bindActionCreators(searchAction, dispatch),
    loginAction: bindActionCreators(loginAction, dispatch),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Header);
