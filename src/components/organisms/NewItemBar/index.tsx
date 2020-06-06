import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePageContext } from '../../../context/pageContext';
import { addArticleActionCreator } from '../../../store/articles/slice';
import { addNoteActionCreator } from '../../../store/notes/slices';
import { addTwitterActionCreator } from '../../../store/twitters/slices';
import * as S from './NavItemBar.styld';
import { defaultInputValues, inputValuesProps, NewItemBarProps } from './types';

export const NewItemBar: React.FC<NewItemBarProps> = ({
  isVisible,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const pageContext = usePageContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValues, setInputValues] = useState<inputValuesProps>(
    defaultInputValues,
  );

  type eventType =
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>;

  const handleChange = (event: eventType) => {
    event.preventDefault();
    const { name, value } = event.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsSubmitting(true);
    switch (pageContext) {
      case 'notes':
        dispatch(
          addNoteActionCreator({
            title: inputValues.title,
            id: '1999',
            content: inputValues.content,
            createdAt: '22-01-199',
          }),
        );
        break;
      case 'articles':
        dispatch(
          addArticleActionCreator({
            title: inputValues.title,
            id: '1999',
            content: inputValues.content,
            createdAt: '22-01-199',
            articleUrl: inputValues.articleUrl,
          }),
        );
        break;
      case 'twitters':
        dispatch(
          addTwitterActionCreator({
            title: inputValues.title,
            id: '1999',
            content: inputValues.content,
            createdAt: '22-01-199',
            twitterName: inputValues.twitterName,
          }),
        );
        break;
      default:
        break;
    }
    handleClose(event);
    setInputValues(defaultInputValues);
    setIsSubmitting(false);
  };

  return (
    <S.Wrapper activeColor={pageContext} isVisible={isVisible}>
      <S.InnerWrapper>
        <S.Header>{`Add item to ${pageContext}`}</S.Header>
        <form>
          <S.StyledInput
            type="text"
            onChange={handleChange}
            borderColor={pageContext}
            name="title"
            value={inputValues.title}
            placeholder="Title"
          />
          {pageContext === 'articles' ? (
            <S.StyledInput
              type="text"
              onChange={handleChange}
              borderColor={pageContext}
              name="articleUrl"
              value={inputValues.articleUrl}
              placeholder="Article url"
            />
          ) : null}
          {pageContext === 'twitters' ? (
            <S.StyledInput
              type="text"
              onChange={handleChange}
              borderColor={pageContext}
              name="twitterName"
              value={inputValues.twitterName}
              placeholder="Twitter accunt link"
            />
          ) : null}
          <S.StyledTextArea
            onChange={handleChange}
            borderColor={pageContext}
            name="content"
            value={inputValues.content}
            placeholder="Your content goes here."
          />
          <S.StyledButton
            color={pageContext}
            type="submit"
            disabled={isSubmitting}
            onClick={onSubmit}
          >
            Add Item
          </S.StyledButton>
        </form>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};
