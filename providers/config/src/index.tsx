import React, {PureComponent} from 'react';

export type Config = {[key in string]: string};

interface ConfigContext {
  config?: Config;
}

export const context = React.createContext<ConfigContext & LayoutProps>({});

export class ConfigProvider extends PureComponent<ConfigContext> {
  public render() {
    const {config} = this.props;
    return (
      <context.Provider value={{config}}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const useConfig = () => {
  const {config} = React.useContext<ConfigContext>(context);
  if (!config) throw new Error(`Provider de configuração não inicializado`);
  return config;
};
