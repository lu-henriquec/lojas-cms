import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import PropTypes from 'prop-types';

import { setLojas } from '../../store/actions/lojas';
import api from '../../services/api';

import * as FormStyle from './style';
import Delete from './delete';

const FormDados = ({ dados, isUpdate = false }) => {
  const dispatch = useDispatch();

  const initialData = !dados ? {} : {
    name: dados.name,
    address: dados.address,
    lat: dados.lat,
    lng: dados.lng
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .required('Nome obrigatório'),
    address: Yup.string()
      .required('Endereço obrigatório'),
    lat: Yup.string()
      .required('Latitude obrigatório'),
    lng: Yup.string()
      .required('Longitude obrigatório'),
  });

  function handleSubmit(data) {
    isUpdate ? updateAdress(data) : addAdress(data);
  }

  async function updateAdress(data) {
    try {
      await api.put(`/loja/${dados._id}`, data)
        .then( async res => {
          const { data } = await api.get('/lojas');
          dispatch(setLojas(data));

          if (res.data.status === 200) alert('Loja atualizada com sucesso!');
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function addAdress(data) {
    try {
      data.lat = Number(data.lat);
      data.lng = Number(data.lng);

      await api.post(`/lojas`, data)
        .then( async res => {
          const { data } = await api.get('/lojas');
          dispatch(setLojas(data));

          if (res.data.status === 201) alert('Loja cadastrada com sucesso!');
        });
    } catch (error) {
      console.error(error);
    }
  }

  // if (!dados) return null;

  return (
    <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
      <FormStyle.Fieldset>
        <label htmlFor='name'>Nome:</label>
        <Input name='name' />
      </FormStyle.Fieldset>

      <FormStyle.Fieldset>
        <label htmlFor='address'>Endereço:</label>
        <Input name='address' />
      </FormStyle.Fieldset>

      <FormStyle.Fieldset>
        <label htmlFor='lat'>Latitude:</label>
        <Input name='lat' />
      </FormStyle.Fieldset>

      <FormStyle.Fieldset>
        <label htmlFor='lng'>Longitude:</label>
        <Input name='lng' />
      </FormStyle.Fieldset>

      <FormStyle.Fieldset>
        <FormStyle.Button theme='success' type='submit' value='Salvar' />
      </FormStyle.Fieldset>

      {isUpdate &&
        <FormStyle.Fieldset>
          <Delete id={dados._id}>
            <FormStyle.Button
              theme='error'
              type='button'
              value='Excluir'
            />
          </Delete>
        </FormStyle.Fieldset>
      }
    </Form>
  );
};

FormDados.propTypes = {
  route: PropTypes.object,
  isUpdate: PropTypes.bool
};

export default FormDados;
