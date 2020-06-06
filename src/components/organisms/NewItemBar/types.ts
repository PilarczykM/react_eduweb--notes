export interface NewItemBarProps {
  isVisible: boolean;
  handleClose: Function;
}

export interface inputValuesProps {
  title: string;
  content: string;
  articleUrl: string;
  twitterName: string;
}

export const defaultInputValues: inputValuesProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};
