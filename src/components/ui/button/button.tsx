import React from 'react';

import * as Styled from './button.styles';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  disabled,
  onClick,
  theme = ButtonTheme.Primary,
  type = 'button',
}) => {
  return (
    <Styled.Button
      disabled={disabled}
      onClick={onClick}
      theme={theme}
      type={type}
    >
      {children}
    </Styled.Button>
  )
};

export default Button;
