import React from 'react';
import {TextInput} from 'react-native';
import {TrackeableHOC} from '../TrackeableHOC';

const InputWithoutRef: React.FC<InputProps> = ({...props}) => {
  return <TextInput {...props} />;
};

export default TrackeableHOC<InputProps>(InputWithoutRef);
