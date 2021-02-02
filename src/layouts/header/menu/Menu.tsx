import React from 'react';
import { MenuBox, LogoBox, NavBox, SearchBox } from './Menu.style';
import { Button, Col, Row } from 'antd';

type Props = {};

import 'antd/dist/antd.css';

const Menu: React.FC<Props> = () => {
  return (
    <MenuBox>
      <LogoBox xs={ { span: 5, offset: 1 } } lg={ { span: 6, offset: 2 } }>
        Logo nè
      </LogoBox>

      <NavBox xs={ { span: 11, offset: 1 } } lg={ { span: 6, offset: 2 } }>
        Nav nè
      </NavBox>

      <SearchBox xs={ { span: 5, offset: 1 } } lg={ { span: 6, offset: 2 } }>
        Search nè
      </SearchBox>

    </MenuBox>
  );
};

export default Menu;