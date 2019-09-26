import styled from 'styled-components';

export const LinksContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;

  a {
    border: 1px solid var(--secondary);
    border-radius: 5px;
    color: var(--secondary);
    margin: 10px 0;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    width: 100%;

    &:hover {
      background: var(--secondary);
      color: var(--white);
    }
  }
`;
