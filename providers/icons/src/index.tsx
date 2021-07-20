import React, {PureComponent} from 'react';
import {IconsType} from '../types';
export {IconsType} from '../types';

export type Icon = {[key in IconsType]: React.FC<any>};

interface IconContext {
  icons?: Icon;
}

export const context = React.createContext<IconContext>({});

export class IconProvider extends PureComponent<IconContext> {
  public render() {
    const {icons} = this.props;
    return (
      <context.Provider value={{icons}}>{this.props.children}</context.Provider>
    );
  }
}

export const useIcon = (type: IconsType) => {
  const {icons} = React.useContext<IconContext>(context);
  if (!icons) throw new Error(`Provider de icones não inicializados`);
  return icons[type] || null;
};
