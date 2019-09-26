import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

import LinkRoute from '../../components/Link';

import { Title, BoxLoja, Boxadd } from './style';

const Lojas = () => {
  const { lojas } = useSelector(state => state);

  return (
    <>
      <LinkRoute route="/" />
      <Title>Lojas</Title>
      <Boxadd to='/adicionar'><FaPlus size={18}/>Adicionar loja</Boxadd>
      {lojas.map(loja => {
        return (
          <BoxLoja key={loja._id}>
            <p>{loja.name}</p>
            <p>{loja.address}</p>
            <p>
              {loja.lat} / {loja.lng}
            </p>
            <Link to={`/editar/${loja._id}`}>Editar</Link>
          </BoxLoja>
        );
      })}
    </>
  );
};

export default Lojas;
