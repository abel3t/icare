import styled from 'styled-components';
import { Row, Col } from 'antd';

export const MenuBox = styled(Row)`
  height: 70px;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  box-shadow: ${ ({ theme }) => theme.shadows.base };
  color: #42494f;
  transition: all 0.5s;
  z-index: 1;
`;
export const LogoBox = styled(Col)``;
export const NavBox = styled(Col)``;
export const SearchBox = styled(Col)``;