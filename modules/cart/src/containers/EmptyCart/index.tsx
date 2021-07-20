import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useComponent, ComponentsType} from '@sbf-providers/components';
import {IconsType} from '@sbf-providers/icons';
import {goBack} from '@sbf-providers/navigation';
import {useLocale} from '@sbf-providers/locale';
import {useTrack} from '@sbf-providers/track';

export const EmptyCart = () => {
  const {
    touchableTrack: {
      Cart: {trackEmpty},
    },
  } = useTrack();
  const {
    containers: {
      EmptyCart: {title, subtitle, description, buttonDismiss},
    },
  } = useLocale();
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Icon = useElement<IconProps>(ElementsType.ICON);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);
  const Button = useComponent<ButtonProps>(ComponentsType.BUTTON);

  return (
    <LayoutItem fullHeight backgroundColor="white">
      <LayoutItem
        shaped
        bordered
        gutterInner="sm"
        gutterHorizontal="md"
        gutterOuter="lg"
        marginLeft="md"
        marginRight="md"
        justifyContent="center">
        <LayoutItem gutterVertical="md" alignItems="center">
          <Icon icon={IconsType.ICON_NO_CART} color="primary" size={130} />
        </LayoutItem>
        <Grid>
          <GridItem col={8} gutterVertical="sm">
            <Typography color="black" fontSize="headline" fontWeight="bold">
              {title}
            </Typography>
          </GridItem>
        </Grid>

        <Grid>
          <GridItem col={10} gutterVertical="sm">
            <Typography color="black" fontSize="subtitle">
              {subtitle}
            </Typography>
            <Typography color="black" fontSize="subtitle">
              {description}
            </Typography>
          </GridItem>
        </Grid>
        <GridItem gutterVertical="sm">
          <Button
            idTrack={trackEmpty}
            onPress={() => {
              goBack();
            }}
            text={buttonDismiss}
          />
        </GridItem>
      </LayoutItem>
    </LayoutItem>
  );
};
