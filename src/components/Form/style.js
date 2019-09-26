import styled from 'styled-components';

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

    &[type='submit'] {
      background-color: var(--success);
      color: var(--white);
    }

    &[type='button'] {
      background-color: var(--error);
      color: var(--white);
    }
  }

  & + fieldset {
    margin-top: 15px;
  }
`;
