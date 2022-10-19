import styled from 'styled-components';
import { Form } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  & > label {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 16px;
    gap: 5px;
  }

  & > button {
    align-self: center;
    padding: 10px;
    background-color: inherit;
    color: inherit;
    border-color: inherit;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    border-radius: 6px;
  }
`;
