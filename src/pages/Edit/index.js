import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import LinkRoute from '../../components/Link';
import Form from '../../components/Form';

export const Title = styled.h2`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

const Index = ({ match }) => {
  const [loja, setLoja] = useState({});
  const [loading, setLoading] = useState(true);
  const { lojas } = useSelector(state => state);
  const { id } = match.params;

  useEffect(() => {
    const loja = lojas.find(loja => loja._id === id);

    if(loja) {
      setLoja(loja);
      setLoading(false);
    }
  });

  if (loading) {
    return <p>Carregando dados da loja...</p>;
  }

  return (
    <>
      <LinkRoute route="/lojas" />
      {!loja
        ? <p>Loja excluída/não encontrada!</p>
        : (
            <>
              <Title>Editar</Title>
              <Form dados={loja} isUpdate={true}/>
            </>
          )
      }
    </>
  );
};

export default Index;
