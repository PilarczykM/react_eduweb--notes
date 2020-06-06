import React from 'react';
import * as S from './TextArea.styled';
import { TextAreaProps } from './types';

export const TextArea: React.FC<TextAreaProps> = props => {
    const { ref, ...otherProps } = props;

    return <S.StyledTextArea {...otherProps} />;
}