import React from 'react';
import {
  DetailWrapper,
  DetailMain,
  DetailTitle,
  DetailImg,
  DetailContent,
  DetailMainContent,
  DetailMainContentTitle,
} from './style';
import Pic from '../static/pic.webp';
import { connect } from 'react-redux';

class Detail extends React.Component {
  render() {
    const showMainContent = (mainContent) => {
      let content = mainContent.replace(/\n/g, '~');
      let paga = '',
        arr = [];
      for (let i = 0; i < content.length; i++) {
        if (content[i] !== '~') {
          paga += content[i];
        } else {
          arr.push(paga);
          paga = '';
        }
      }
      return arr;
    };
    return (
      <DetailWrapper>
        <DetailMain>
          <DetailTitle>{this.props.detail.title}</DetailTitle>
          <DetailContent>{this.props.detail.content}</DetailContent>
          <DetailImg>
            <img src={Pic} alt="" />
          </DetailImg>
          {showMainContent(this.props.detail.mainContent).map((element) => {
            if (element.indexOf('0') !== -1) {
              return (
                <DetailMainContentTitle key={element}>
                  {element}
                </DetailMainContentTitle>
              );
            } else
              return (
                <DetailMainContent key={element}>{element}</DetailMainContent>
              );
          })}
        </DetailMain>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(Detail);
