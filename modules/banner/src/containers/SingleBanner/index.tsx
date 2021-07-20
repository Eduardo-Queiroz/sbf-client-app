import React from 'react';
import {Image} from 'react-native';

import {useElement, ElementsType} from '@sbf-providers/elements';
import Banner from '../../../assets/images/Banner.png';

const SingleBanner = () => {
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);

  return (
    <LayoutItem alignItems="center" backgroundColor="white">
      <Image source={Banner} />
    </LayoutItem>
  );
};

export default SingleBanner;
