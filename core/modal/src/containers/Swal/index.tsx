import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';

import {useTrack} from '@sbf-providers/track';

export const SwalComponent: React.FC<ModalProps & SwalProps> = ({
  visible,
  onDismiss,
  onConfirm,
  ...params
}) => {
  const {
    touchableTrack: {
      Swal: {trackConfirm},
    },
    textTrack: {
      Swal: {trackText},
    },
  } = useTrack();
  const Modal = useElement<ModalProps>(ElementsType.MODAL);
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const Button = useComponent<ButtonProps>(ComponentsType.BUTTON);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);

  return (
    <Modal visible={visible} onDismiss={onDismiss}>
      <GridItem
        height="100%"
        wrap="nowrap"
        alignItems="center"
        justifyContent="center">
        <LayoutItem
          shaped
          width="80%"
          gutterOuter="md"
          gutterInner="md"
          backgroundColor="white">
          {!!params.icon && (
            <LayoutItem paddingBottom="sm">
              <GridItem justifyContent="center">
                <Icon icon={params.icon} size={params.iconSize || 125} />
              </GridItem>
            </LayoutItem>
          )}
          {!!params.text && (
            <LayoutItem paddingBottom="sm" paddingTop="md">
              <Typography
                idTrack={trackText}
                fontSize="info"
                textAlign="center">
                {params.text}
              </Typography>
            </LayoutItem>
          )}
          <LayoutItem paddingTop="sm" alignItems="center">
            <Button
              idTrack={trackConfirm}
              text={'Entendi'}
              onPress={onConfirm}
            />
          </LayoutItem>
        </LayoutItem>
      </GridItem>
    </Modal>
  );
};
