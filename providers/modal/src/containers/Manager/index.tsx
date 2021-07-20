import React, {PureComponent} from 'react';

import {ModuleType, Module} from '@sbf-providers/module';
import {ModalServices} from '../../services';

interface ModalManagerProps {
  modules: Module[];
}

export class ModalManager extends PureComponent<ModalManagerProps> {
  public state = {
    activeModals: [] as any[],
    currentModal: '',
    modals: this.props.modules.filter(a => a.type == ModuleType.MODAL),
  };

  public componentDidMount() {
    if (this.state.modals.length) {
      const listenerOpenModal = ({toggle, type, params}: any) => {
        if (toggle) {
          const selectedModal = this.state.modals.find(a => a.name == type);
          if (selectedModal && this.state.currentModal != type) {
            if (!this.state.activeModals.find(a => a.name == type)) {
              this.setState({
                activeModals: [
                  {...params, ...selectedModal},
                  ...this.state.activeModals,
                ],
              });
            }
            this.setState({currentModal: type});
          }
        } else {
          const newActiveModals = this.state.activeModals.filter(
            a => a.name != this.state.currentModal,
          );
          this.setState({activeModals: newActiveModals});
          newActiveModals.length
            ? this.setState({currentModal: newActiveModals[0]})
            : this.setState({currentModal: ''});
        }
      };
      ModalServices.watch(listenerOpenModal);
      return () => ModalServices.unWatch(listenerOpenModal);
    }
  }

  private onDismiss = () => {
    const newActiveModals = this.state.activeModals.filter(
      a => a.name != this.state.currentModal,
    );
    this.setState({activeModals: newActiveModals});
    newActiveModals.length
      ? this.setState({currentModal: newActiveModals[0].name})
      : this.setState({currentModal: ''});
    ModalServices.extinguish();
  };

  private onConfirm = (value: any) => {
    const newActiveModals = this.state.activeModals.filter(
      a => a.name != this.state.currentModal,
    );
    this.setState({activeModals: newActiveModals});
    newActiveModals.length
      ? this.setState({currentModal: newActiveModals[0].name})
      : this.setState({currentModal: ''});
    ModalServices.extinguish(value || true);
  };

  public render() {
    return (
      <>
        {!!this.state.activeModals.length &&
          this.state.activeModals.map(({Component, name, ...params}: any) => (
            <Component
              key={name}
              visible={this.state.currentModal == name}
              {...params}
              onDismiss={this.onDismiss}
              onConfirm={this.onConfirm}
            />
          ))}
        {this.props.children}
      </>
    );
  }
}
