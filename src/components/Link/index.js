import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FaArrowLeft } from 'react-icons/fa';

export const LinkStyled = styled(Link)`
  color: var(--gray);
`;

const LinkRoute = ({ route }) => <LinkStyled to={route}><FaArrowLeft size={18}/></LinkStyled>;

LinkRoute.propTypes = {
  route: PropTypes.string.isRequired,
}

export default LinkRoute;
