import React from 'react';
import {Alert, BackHandler, Dimensions} from 'react-native';
import {useFocusEffect} from '@sbf-providers/navigation';
import {ContainerType, useContainer} from '@sbf-providers/module';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';

const Home = () => {
  const ScrollLayoutItem = useElement<LayoutProps>(
    ElementsType.SCROLL_LAYOUT_ITEM,
  );
  const SingleBanner = useContainer(ContainerType.BANNER_SINGLE);
  const SpotlightCatalog = useContainer(ContainerType.CATALOG_SPOTLIGHT);
  const Footer = useComponent(ComponentsType.FOOTER);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);

  const handleBackButton = () => {
    Alert('Atenção', 'Tem certeza que quer sair do app?', (resolve: any) => [
      {text: 'Sim', onPress: () => BackHandler.exitApp()},
      {text: 'Não', onPress: () => resolve(false)},
    ]);
  };

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  });

  return (
    <ScrollLayoutItem backgroundColor="white" paddingTop="sm">
      <LayoutItem
        justifyContent="space-between"
        style={{minHeight: Dimensions.get('window').height - 160}}>
        <SingleBanner />
        <SpotlightCatalog />
        <Footer />
      </LayoutItem>
    </ScrollLayoutItem>
  );
};

export default Home;
