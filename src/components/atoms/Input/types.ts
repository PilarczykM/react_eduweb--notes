import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { colors } from '../../../theme/mainTheme';

export interface InputProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  borderColor?: colors;
  search?: boolean;
}
