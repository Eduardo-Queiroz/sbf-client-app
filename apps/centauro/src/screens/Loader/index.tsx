import React from 'react';
import {Dimensions} from 'react-native';
import {styled} from '@sbf-providers/theme';
import SplashScreen from 'react-native-splash-screen';
import {useFocusEffect, ScreenType, reset} from '@sbf-providers/navigation';

const Loader: React.FC = () => {
  useFocusEffect(() => {
    setTimeout(() => {
      reset(ScreenType.HOME);
      SplashScreen.hide();
    }, 500);
  });

  return (
    <Container>
      <Loading />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Loading = styled.ActivityIndicator`
  position: absolute;
  top: ${Dimensions.get('window').height / 2 - 76}px;
  left: ${Dimensions.get('window').width / 2 - 16}px;
`;

export default Loader;
