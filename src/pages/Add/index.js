import React from 'react';
import styled from 'styled-components';

import LinkRoute from '../../components/Link';

import Form from '../../components/Form';

export const Title = styled.h2`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

const Add = () => {
  return (
    <>
      <LinkRoute route="/lojas" />
      <Title>Adicionar loja</Title>
      <Form isUpdate={false}/>
    </>
  );
};

export default Add;
