import React, {PureComponent} from 'react';
export {ContainerType} from '../types';

export enum ModuleType {
  ROUTE = 'ROUTE',
  CONTAINER = 'CONTAINER',
  MODAL = 'MODAL',
}

export interface Module {
  name: string | number;
  type: ModuleType;
  Component: any;
}

interface ModulesContext {
  routes: Module[];
  containers: any;
}

interface ModulesProps {
  modules: Module[];
}

export const context = React.createContext<any>({});
export class ModuleProvider extends PureComponent<ModulesProps> {
  public render() {
    const {modules} = this.props;
    return (
      <context.Provider
        value={{
          routes: modules.filter((a) => a.type == ModuleType.ROUTE),
          containers: modules
            .filter((a) => a.type == ModuleType.CONTAINER)
            .reduce((obj: any, item: any) => {
              return {
                ...obj,
                [item.name]: item,
              };  
            }, {}),
        }}>
        {this.props.children}
      </context.Provider>
    );
  }
}


export const useContainer = <PropsType extends unknown> (name: string): React.FC<PropsType> => {
  const {containers} = React.useContext<ModulesContext>(context);

  if (!containers)
    throw new Error(`Sem containers inicialiados no contexto`);
    
  const currentContainer = containers[name]?.Component;
  if (!currentContainer)
    throw new Error(`Componente ${name} não foi instaciado no contexto`);

  return currentContainer;
};

export const useRoutes = () => {
  const {routes} = React.useContext<ModulesContext>(context);
  if (!routes?.length) throw new Error('Sem rotas inicialiadas no contexto');
  return routes;
};
