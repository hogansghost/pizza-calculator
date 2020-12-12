import React from 'react';

import { noOp } from '../../../utils';

import * as Styled from './input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleChange: (args: any) => void;
}

export const Input: React.FunctionComponent<InputProps> = ({
  label,
  type = 'text',
  name,
  value,
  handleChange = noOp,
}) => {
  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) : void => {
    handleChange(evt);
  }

  return (
    <Styled.Label>
      { label && (
        <Styled.LabelTitle>{label}</Styled.LabelTitle>
      )}

      <Styled.Input
        name={name}
        type={type}
        onChange={handleOnChange}
        value={value}
      />
    </Styled.Label>
  )
};

export default Input;
