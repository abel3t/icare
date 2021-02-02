import React from 'react';

import HeaderWrapper from './Header.style';
import Menu from './menu/Menu';
import TopBanner from './TopBanner';
import { Affix } from 'antd';

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <HeaderWrapper className={ className }>
      <TopBanner/>

      <Affix offsetTop={ 0 }>
        <Menu/>
      </Affix>
    </HeaderWrapper>
  );
};

export default Header;