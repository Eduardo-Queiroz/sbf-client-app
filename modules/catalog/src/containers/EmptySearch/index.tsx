import React from 'react';
import {useElement, ElementsType} from '@sbf-providers/elements';
import {useSelector} from 'react-redux';
import {State} from '../../../types';
import {useLocale} from '@sbf-providers/locale';

export const EmptySearch = () => {
  const {
    containers: {
      EmptySearch: {title},
    },
  } = useLocale();
  const searchText = useSelector<State, string>(
    ({catalog}) => catalog.searchText,
  );
  const LayoutItem = useElement<LayoutProps>(ElementsType.LAYOUT_ITEM);
  const Grid = useElement<GridProps>(ElementsType.GRID);
  const GridItem = useElement<GridItemProps>(ElementsType.GRID_ITEM);
  const Typography = useElement<TypographyProps>(ElementsType.TYPOGRAPHY);

  return (
    <LayoutItem fullHeight backgroundColor="lightGrey">
      <Grid gutterInner="lg" flexDirection="column">
        <GridItem gutterVertical="lg">
          <Typography fontWeight="bold" fontSize="title">
            {title}
            <Typography fontWeight="bold" fontSize="title" color="primary">
              {' '}
              “{searchText}”
            </Typography>
          </Typography>
        </GridItem>
      </Grid>
    </LayoutItem>
  );
};
