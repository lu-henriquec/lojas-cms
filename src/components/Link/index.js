import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkRoute = ({ route }) => <Link to={route}>Voltar</Link>;

LinkRoute.propTypes = {
  route: PropTypes.string.isRequired,
}

export default LinkRoute;
