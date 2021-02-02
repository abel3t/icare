import React, { ReactNode } from 'react';

import withScrollHeader from 'utils/withHeaderScroll';
import Header from './header/Header';
import { LayoutWrapper } from './AppLayout.style';

const ScrollHeader = withScrollHeader(Header);

type LayoutProps = {
  className?: string;
  children?: ReactNode
};

const AppLayout: React.FunctionComponent<LayoutProps> = ({
  className,
  children
}) => {
  return (
    <LayoutWrapper className={ `${ className }` }>
      <ScrollHeader/>
      { children }
    </LayoutWrapper>
  );
};

export default React.memo(AppLayout);