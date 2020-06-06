import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { colors } from '../../../theme/mainTheme';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  borderColor?: colors;
  search?: boolean;
}
