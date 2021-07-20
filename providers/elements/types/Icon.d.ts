interface SizeProps {
  size?: number;
  width?: number;
  height?: number;
}

interface IconPropsInterface extends SizeProps {
  height?: number;
  width?: number;
  size?: number;
  color?: import('@sbf-types/general').Color;
  icon: React.FC<any> | import('@sbf-providers/icons').IconsType;
}

declare type IconProps = IconPropsInterface;
