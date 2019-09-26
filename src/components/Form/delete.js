import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setLojas } from '../../store/actions/lojas';
import api from '../../services/api';


const Delete = ({ children, id }) => {
  const [excludeDone, setExcludeDone] = useState(false);
  const dispatch = useDispatch();

  const excluirLoja = async () => {
    const excluir = await api.delete(`/loja/${id}`);

    if (excluir.data.status === 200) {
      const { data } = await api.get('/lojas');
      dispatch(setLojas(data));

      setExcludeDone(true);
    };
  };

  if (excludeDone) return <Redirect to='/lojas' />;

  return (
    <span onClick={() => excluirLoja()}>
      {children}
    </span>
  );
};

Delete.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Delete;
