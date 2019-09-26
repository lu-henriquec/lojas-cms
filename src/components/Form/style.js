import styled, { css } from 'styled-components';

export const Form = styled.form`
  margin: 15px 0;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    border: 1px solid;
    border-radius: 4px;
    padding: 10px;
    width: 100%;

    & + span {
      color: var(--error);
    }
  }

  & + fieldset {
    margin-top: 15px;
  }
`;

export const Button = styled.input`
    background-color: ${props => props.theme && css`var(--${props.theme})`};
    color: var(--white);
    cursor: pointer;
`;
