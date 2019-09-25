import React from 'react';
import { Link } from 'react-router-dom';

import { LinksContainer } from './style';

export default function Main() {
  return (
    <>
      <LinksContainer>
        <Link to='/lojas'>Ver lojas</Link>
      </LinksContainer>
    </>
  );
}
