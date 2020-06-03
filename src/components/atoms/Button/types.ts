import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { colors } from './../../../theme/mainTheme';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: colors;
  secondary?: boolean;
}
