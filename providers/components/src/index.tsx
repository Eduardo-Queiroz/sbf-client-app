import React, {PureComponent} from 'react';
import {ComponentsType} from '../types/components';
export {ComponentsType} from '../types/components';

type Component = {[key in ComponentsType]: React.FC<any>};

interface ComponentsContext {
  components?: Component;
}

export const context = React.createContext<ComponentsContext>({});

export class ComponentProvider extends PureComponent<ComponentsContext> {
  public render() {
    const {components, children} = this.props;
    return (
      <context.Provider
        value={{
          components,
        }}>
        {children}
      </context.Provider>
    );
  }
}

export const useComponent = <PropsType extends unknown>(
  type: ComponentsType,
): React.FC<PropsType> => {
  const {components} = React.useContext<ComponentsContext>(context);
  if (!components)
    throw new Error(`Providers de componentes não inicializados`);
  return components[type] || <></>;
};
