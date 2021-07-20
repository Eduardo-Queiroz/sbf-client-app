import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {Dimensions} from 'react-native';

const Loading = () => {
  const Loading = useElement(ElementsType.LOADING);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  return (
    <LayoutItem style={{width: Dimensions.get('window').width}} marginTop="xl">
      <Loading />
    </LayoutItem>
  );
};

export default Loading;
