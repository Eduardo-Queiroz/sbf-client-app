import React from 'react';
import {FlatList as RNFlatList} from 'react-native';
// import {useCavy, wrap} from 'cavy';

export const FlatList: React.FC<FlatListProps> = ({
  renderItem,
  keyExtractor,
  ...props
}) => {
  // const generateTestHook = useCavy();
  // const ItemRender = wrap(renderItem);
  const ItemRender = renderItem;
  // const trackIdItem = (item: any, index: number) =>
  //   keyExtractor ? keyExtractor(item, index) : `${index}`;
  return (
    <RNFlatList
      {...props}
      keyExtractor={keyExtractor}
      renderItem={({item, index}) => {
        return (
          <ItemRender
            // ref={generateTestHook(trackIdItem(item, index))}
            {...{item, index}}
          />
        );
      }}
    />
  );
};
