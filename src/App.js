import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { setLojas } from './store/actions/lojas';

import Main from './pages/Main';
import Lojas from './pages/Lojas';
import Editar from './pages/Edit';

import Layout from './components/Layout';
import Title from './components/Title';

export default function src() {
  const { lojas } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
		getLojas();
  }, []);

  const getLojas = async () => {
    const lojas = await fetch('http://localhost:3000/lojas');
    const lojasResponse = await lojas.json();

    dispatch(setLojas(lojasResponse));
  }

  if (!lojas) {
    return <div><p>Carregando...</p></div>;
  }

  return (
    <Layout>
      <Title />
      <Router>
        <Route>
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/lojas' component={Lojas} />
            <Route path='/editar/:id' component={Editar} />
          </Switch>
        </Route>
      </Router>
    </Layout>
  );
}
