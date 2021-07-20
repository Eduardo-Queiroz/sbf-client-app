interface PickerPropsInterface {
  value: string;
  items: {value: string; label: string}[];
  onValueChange: (value: any) => void;
}

declare type PickerProps = PickerPropsInterface & TrackeablePropsInterface;
