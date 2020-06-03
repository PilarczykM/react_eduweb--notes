import React from 'react';

export type pageTypes = 'notes' | 'twitters' | 'articles';

const defaultPageType = 'notes';

export const PageContext = React.createContext<pageTypes>(defaultPageType);

export const usePageContext = () => React.useContext(PageContext);
