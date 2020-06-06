import React from 'react';
import { Sidebar } from '../../components/organisms/Sidebar/Sidebar';

export const UserPageTemplate: React.FC = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);
