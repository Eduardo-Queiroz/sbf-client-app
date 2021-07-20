import {Module, ModuleType} from '@sbf-providers/module';
import {ModalType} from '@sbf-providers/modal';
import {SwalComponent} from './containers/Swal';

export const modules: Module[] = [
  {
    name: ModalType.SWAL,
    Component: SwalComponent,
    type: ModuleType.MODAL,
  },
];
