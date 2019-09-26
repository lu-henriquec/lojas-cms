import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import LinkRoute from '../../components/Link';
import Form from '../../components/Form';

const Index = ({ match }) => {
  const [loja, setLoja] = useState({});
  const [loading, setLoading] = useState(true);
  const { lojas } = useSelector(state => state);
  const { id } = match.params;

  useEffect(() => {
    const loja = lojas.find(loja => loja._id === id);

    setLoading(false);
    setLoja(loja);
  });

  if (loading) {
    return <p>Carregando dados da loja...</p>;
  }

  return (
    <>
      <LinkRoute route="/lojas" />
      {!loja ? <p>Loja não encontrada!</p> : <Form dados={loja} />}
    </>
  );
};

export default Index;
