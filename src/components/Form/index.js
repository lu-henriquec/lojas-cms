import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';

import * as FormStyle from './style';

const Form = ({ dados }) => {
  const [excludeDone, setExcludeDone] = useState(false);
  const excluirLoja = async id => {
    console.log(id);
    const excluir = await api.delete(`/loja/${id}`);

    if (excluir.data.status === 200) setExcludeDone(true);
  };

  if (!dados) return null;

  if (excludeDone) return <Redirect to="/lojas" />;

  return (
    <FormStyle.Form id="formLoja" onSubmit={e => e.preventDefault()}>
      <FormStyle.Fieldset>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" defaultValue={dados.name} />
      </FormStyle.Fieldset>
      <FormStyle.Fieldset>
        <label htmlFor="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          defaultValue={dados.address}
        />
      </FormStyle.Fieldset>
      <FormStyle.Fieldset>
        <label htmlFor="lat">Latitude</label>
        <input type="text" name="lat" id="lat" defaultValue={dados.lat} />
      </FormStyle.Fieldset>
      <FormStyle.Fieldset>
        <label htmlFor="lng">Longitude</label>
        <input type="text" name="lng" id="lng" defaultValue={dados.lng} />
      </FormStyle.Fieldset>
      <FormStyle.Fieldset>
        <input type="submit" value="Salvar" />
      </FormStyle.Fieldset>
      <FormStyle.Fieldset>
        <input
          type="button"
          value="Excluir"
          onClick={() => excluirLoja(dados._id)}
        />
      </FormStyle.Fieldset>
    </FormStyle.Form>
  );
};

Form.propTypes = {
  route: PropTypes.object,
};

export default Form;
