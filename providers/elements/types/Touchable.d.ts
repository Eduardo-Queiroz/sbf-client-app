interface OwnProps {
  withoutFeedback?: boolean;
  native?: boolean;
}

interface TouchableStyleProps {
  flex?: number | string;
}

type CustomTouchableProps = (
  | import('react-native').TouchableNativeFeedbackProperties
  | TouchableStyleProps) &
  OwnProps;

declare type TouchableProps = CustomTouchableProps & TrackeablePropsInterface;
