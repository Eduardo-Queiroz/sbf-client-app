interface ButtonPropsInterface {
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

declare type ButtonProps = ButtonPropsInterface & TrackeablePropsInterface;
