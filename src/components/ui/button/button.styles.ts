import styled from 'styled-components';

import {
  ButtonProps,
  ButtonTheme,
} from './button';

export const Button = styled.button<ButtonProps>`
  display: block;
  padding: 0.5em 1.5em;
  text-align: center;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
  transition: all 333ms;
  font-size: 1.35em;

  &:not([disabled]) {
    cursor: pointer;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    transform: translateY(-1px);
    box-shadow: 0px 2px 6px rgba(0,0,0,0.1), 0px 4px 16px -8px rgba(0,0,0,0.15);
  }


  ${({ theme }) => theme === ButtonTheme.Primary  && `
    background-color: #d662f7;
    color: #fff;
  `}

  ${({ theme }) => theme === ButtonTheme.Secondary  && `
    background-color: crimson;
  `}

  &[disabled] {
    opacity: 0.6;
    box-shadow: none;
    filter: grayscale(0.6);
  }
`;
