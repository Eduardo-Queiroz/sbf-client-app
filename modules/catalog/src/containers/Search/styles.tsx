import React from 'react';
import { styled } from '@sbf-providers/theme';
import { ElementsType, useElement } from '@sbf-providers/elements';

export const Input = props => {
  const Input = useElement(ElementsType.INPUT);
  return <Input {...props} />;
};

export const InputSearch = styled(Input)`
  font-size: 16px;
  padding: 12px;
`;
