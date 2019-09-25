import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import GlobalStyles from '../../styles/global';

export const LayoutMain = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 10px;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <LayoutMain>
      <GlobalStyles />
      { children }
    </LayoutMain>
  );
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
