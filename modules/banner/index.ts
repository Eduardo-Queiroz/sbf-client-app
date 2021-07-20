import {ContainerType, Module, ModuleType} from '@sbf-providers/module';
import SingleBanner from './src/containers/SingleBanner';

export const mock = () => {};

export const context = () => {};

export const modules: Module[] = [
  {
    name: ContainerType.BANNER_SINGLE,
    Component: SingleBanner,
    type: ModuleType.CONTAINER,
  },
];
