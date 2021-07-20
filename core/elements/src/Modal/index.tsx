import React from 'react';
import RNModal from 'react-native-modal';

const Modal: React.FC<ModalProps> = ({children, visible}) => (
  <RNModal isVisible={visible}>{children}</RNModal>
);

export default Modal;
