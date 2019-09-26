import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';

export const HeaderWrap = styled.header`
  align-items: center;
  background-color: var(--primary);
  color: var(--white);
  display: flex;
	font-size: 22px;
  font-weight: 600;
  justify-content: space-around;
  padding: 15px 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 150px;
`;

const Header = () => (
  <HeaderWrap>
    <Logo src={logo}/>
    <h1>CMS - Cobasi</h1>
  </HeaderWrap>
);

export default Header;
