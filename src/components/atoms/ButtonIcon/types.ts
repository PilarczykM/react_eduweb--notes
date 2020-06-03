import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: string;
}
