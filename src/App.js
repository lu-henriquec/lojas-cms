import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import api from './services/api';

import { setLojas } from './store/actions/lojas';

import Main from './pages/Main';
import Lojas from './pages/Lojas';
import Editar from './pages/Edit';
import Add from './pages/Add';

import Layout from './components/Layout';
import Header from './components/Header';

export default function src() {
  const { lojas } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    getLojas();
  }, []);

  const getLojas = async () => {
    const { data } = await api.get('/lojas');

    dispatch(setLojas(data));
  };

  // const getLojas = async () => {
  //   const lojas = await fetch('http://localhost:3000/lojas');
  //   const lojasResponse = await lojas.json();

  //   dispatch(setLojas(lojasResponse));
  // };

  if (!lojas) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/lojas" component={Lojas} />
            <Route path="/editar/:id" exact component={Editar} />
            <Route path="/adicionar" component={Add} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}
