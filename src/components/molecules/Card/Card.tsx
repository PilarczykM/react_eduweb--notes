import React, { Component } from 'react';
import { connect } from 'react-redux';
import withContext from '../../../hoc/withContext';
import { theme } from '../../../theme/mainTheme';
import { Button } from '../../atoms/Button/Button';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import * as S from './Card.styled';
import { Props } from './types';

class Card extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      pageContext,
      title,
      created,
      twitterName,
      articleUrl,
      content,
      removeItem,
    } = this.props;
    // const { redirect } = this.state;

    // if (redirect) {
    //   return <Redirect to={`${pageContext}/details/${id}`} />;
    // }
    return (
      <S.Wrapper>
        <S.InnerWrapper
          onClick={this.handleCardClick}
          activeColor={pageContext}
        >
          <S.Header>{title}</S.Header>
          <S.DateInfo>{created}</S.DateInfo>
          {pageContext === 'twitters' && (
            <S.Avatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {pageContext === 'articles' && <S.LinkButton href={articleUrl} />}
        </S.InnerWrapper>
        <S.InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button
            secondary
            color={pageContext}
            theme={theme}
            // onClick={() => {
            //   removeItem(pageContext, id);
            // }}
          >
            REMOVE
          </Button>
        </S.InnerWrapper>
      </S.Wrapper>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   removeItem: (pageContext, id) => dispatch(removeItemAction(pageContext, id)),
// });

export default connect(null, null)(withContext(Card));
