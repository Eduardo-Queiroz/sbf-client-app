import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import IconLogo from '../../assets/icons/logo-black.svg';

const Footer = () => {
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Icon = useElement<LayoutProps>(ElementsType.ICON);
  return (
    <LayoutItem justifyContent="flex-end" height="100px">
      <LayoutItem
        alignItems="center"
        backgroundColor="lightGrey"
        gutterVertical="md">
        <Icon width="140px" icon={IconLogo} />
      </LayoutItem>
    </LayoutItem>
  );
};

export default Footer;
