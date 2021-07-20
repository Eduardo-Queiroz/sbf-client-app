import React, {PureComponent} from 'react';

export const context = React.createContext<any>({});

interface LocaleContext {
  locale?: Locale;
}

export class LocaleProvider extends PureComponent<LocaleContext> {
  public render() {
    const {locale} = this.props;
    return (
      <context.Provider value={{locale}}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const useLocale = () => {
  const {locale} = React.useContext<LocaleContext>(context);
  if (!locale) throw new Error(`Provider de locale não inicializados`);
  return locale;
};
