import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  UserAvatar20
} from '@carbon/icons-react';

const CommonHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="KEYSOL WDCD">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="메뉴 열기"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="SCH KEYSOL">
          WDCD
        </HeaderName>
        <HeaderNavigation aria-label="Menu">
          <HeaderMenuItem element={Link} to="notice">공지사항</HeaderMenuItem>
          <HeaderMenuItem element={Link} to="qna">질문답변</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="notice">공지사항</HeaderMenuItem>
              <HeaderMenuItem element={Link} to="qna">질문답변</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default CommonHeader;
