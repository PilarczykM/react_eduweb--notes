import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { colors } from '../../../theme/mainTheme';

export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  borderColor?: colors;
}
