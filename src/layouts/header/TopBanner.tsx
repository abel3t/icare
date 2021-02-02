import React from 'react';

import styled from 'styled-components';

type Props = {};

const TopBannerWrapper = styled.div`
  height: 60px;
  background: antiquewhite;
`;

import 'antd/dist/antd.css';

const Menu: React.FC<Props> = () => {
  return (
    <TopBannerWrapper>
      Top Banner
    </TopBannerWrapper>
  );
};

export default Menu;