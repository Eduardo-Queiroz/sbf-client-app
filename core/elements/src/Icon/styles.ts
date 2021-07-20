import {styled} from '@sbf-providers/theme';

export interface SizeProps {
  size?: number;
  width?: number;
  height?: number;
}

export const ImageIcon = styled.Image<SizeProps>`
  resize-mode: contain;
  width: ${({size = 40, width = size}) => width}px;
  height: ${({size = 40, height = size}) => height}px;
`;
