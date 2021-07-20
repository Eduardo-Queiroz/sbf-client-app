import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';

import {useTheme} from '@sbf-providers/theme';

const Loading = () => {
  const theme = useTheme();
  return <ActivityIndicator size="large" color={theme.colors.primary} />;
};

export default Loading;
