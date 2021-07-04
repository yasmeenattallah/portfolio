import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import PersistentDrawerLeft from './mobile';
import NavPanel from './navPanel';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return <>{isMobile ? <PersistentDrawerLeft /> : <NavPanel />}</>;
};
export default Header;
