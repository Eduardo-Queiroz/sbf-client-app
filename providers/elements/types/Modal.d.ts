interface OwnProps {
  onDismiss?: () => void;
  onConfirm?: (value?: string) => void;
}

declare type ModalProps = import('react-native').ModalProps &
  OwnProps &
  TrackeablePropsInterface;
