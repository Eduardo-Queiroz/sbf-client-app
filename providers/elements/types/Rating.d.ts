interface RatingPropsInterface {
  rating: number;
  iconSize?: number;
  maxRating?: number;
  iconSpacing?: import('@sbf-types/general').Gutter;
  justifyContent?: import('@sbf-types/general').FlexJustify;
}

declare type RatingProps = RatingPropsInterface;
