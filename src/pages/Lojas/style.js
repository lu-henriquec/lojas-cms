import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

export const Boxadd = styled(Link)`
  align-items: center;
  border: 1px solid #c8c8c8;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;
`;

export const BoxLoja = styled.div`
  border: 1px solid #c8c8c8;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  padding: 10px;

  & + div {
    margin-top: 15px;
  }
`;
