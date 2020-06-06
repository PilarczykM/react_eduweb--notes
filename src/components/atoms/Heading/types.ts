import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface HeagindProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLHeadElement>,
    HTMLHeadElement
  > {
  big?: boolean;
}
