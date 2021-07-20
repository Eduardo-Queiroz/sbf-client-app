import {ContainerType, Module, ModuleType} from '@sbf-providers/module';
import {ScreenType} from '@sbf-providers/navigation';
import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import reducer from './src/store/repository';
import saga from './src/store/saga';
import {CatalogSpotlight} from './src/containers/CatalogSpotlight';
import {Search} from './src/containers/Search';
import {Search as SearchScreen} from './src/screens/Search';

import servicesMocked from './specs/servicesMocked';

export const mock = () => {
  servicesMocked();
};

export const context = async () => {
  useInjectReducer({key: 'catalog', reducer});
  useInjectSaga({key: 'catalog', saga});
};

export const modules: Module[] = [
  {
    name: ScreenType.SEARCH_CATALOG,
    Component: SearchScreen,
    type: ModuleType.ROUTE,
  },
  {
    name: ContainerType.CATALOG_SPOTLIGHT,
    Component: CatalogSpotlight,
    type: ModuleType.CONTAINER,
  },
  {
    name: ContainerType.CATALOG_SEARCH,
    Component: Search,
    type: ModuleType.CONTAINER,
  },
];
