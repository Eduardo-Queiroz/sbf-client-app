import React, {PureComponent} from 'react';
import {ElementsType} from '../types/elements';
export {ElementsType} from '../types/elements';

export type Element = {[key in ElementsType]: React.FC<any>};

interface ElementsContext {
  elements?: Element;
}

export const context = React.createContext<ElementsContext>({});

export class ElementProvider extends PureComponent<ElementsContext> {
  public render() {
    const {elements, children} = this.props;
    return (
      <context.Provider
        value={{
          elements,
        }}>
        {children}
      </context.Provider>
    );
  }
}
export const useElement = <PropsType extends unknown>(
  type: ElementsType,
): React.FC<PropsType> => {
  const {elements} = React.useContext<ElementsContext>(context);
  if (!elements) throw new Error(`Providers de elementos não inicializados`);
  return elements[type] || <></>;
};
