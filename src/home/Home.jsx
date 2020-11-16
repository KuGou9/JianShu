import React from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeLeftItem,
  HomeRight,
  HomeRightList,
} from './style';
import Pic from '../static/pic.webp';
import Right1 from '../static/right1.png';
import Right2 from '../static/right2.png';
import Right3 from '../static/right3.png';
import Right4 from '../static/right4.png';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    const list = [Right1, Right2, Right3, Right4];
    return (
      <HomeWrapper>
        <HomeLeft>
          {list.map((element) => {
            return (
              <Link to="/detail" key={element}>
                <HomeLeftItem>
                  <span className="content">
                    <p className="title">请记住杨绛先生的这4句话（深度文字）</p>
                    <p className="decr">
                      人的一生是一场漫长而坎坷的旅程，多去汲取别人人生的经验，我们在路途上就能少走些弯路，受益终生。
                      杨绛先生的这4句话，字字都是珠玑，读懂了它们，就...
                    </p>
                  </span>
                  <span>
                    <img src={Pic} alt="" />
                  </span>
                </HomeLeftItem>
              </Link>
            );
          })}
        </HomeLeft>
        <HomeRight>
          <HomeRightList>
            {list.map((element) => {
              return <img src={element} alt="" key={element} />;
            })}
          </HomeRightList>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
