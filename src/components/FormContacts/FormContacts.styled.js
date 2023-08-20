import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 12px 12px 12px 14px;
  width: 300px;

  border-radius: 4px;
  outline: none;
  border: none;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  font-style: italic;
`;
export const Button = styled.button`
  display: block;
  padding: 8px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
  font-size: 22px;
  border: none;
  background: transparent;
  text-align: center;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;