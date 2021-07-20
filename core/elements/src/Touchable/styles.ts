import {styled} from '@sbf-providers/theme';

export interface TouchableProps {
  flex?: number | string;
}

export const DefaultTouchable = styled.TouchableOpacity<TouchableProps>`
  ${({flex}) => (flex ? `flex: ${flex}` : null)};
`;

export const IOSTouchable = styled.TouchableOpacity<TouchableProps>`
  ${({flex}) => (flex ? `flex: ${flex}` : null)};
`;

export const AndroidTouchable = styled.TouchableNativeFeedback<TouchableProps>`
  ${({flex}) => (flex ? `flex: ${flex}` : null)};
`;
