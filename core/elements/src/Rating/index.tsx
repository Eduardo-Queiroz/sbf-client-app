import React from 'react';

import {useElement, ElementsType} from '@sbf-providers/elements';
import {IconsType} from '@sbf-providers/icons';
import {Color} from '@sbf-types/general';

const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  iconSize = 17,
  iconSpacing = 'xs',
  justifyContent = 'space-between',
}) => {
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Icon = useElement<IconProps>(ElementsType.ICON);

  const getColor = (index: number): Color => {
    return index < rating ? 'primary' : 'grey';
  };

  return (
    <GridItem flex={1} alignItems="center" justifyContent={justifyContent}>
      {Array.from({length: maxRating}).map((_n, index) => (
        <LayoutItem
          key={index}
          marginRight={index < maxRating ? iconSpacing : undefined}>
          <Icon
            size={iconSize}
            icon={IconsType.ICON_STAR}
            color={getColor(index)}
          />
        </LayoutItem>
      ))}
    </GridItem>
  );
};

export default Rating;
