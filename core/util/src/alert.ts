import {Alert as RNAlert} from 'react-native';

export let testableTitle = '';
export let testableMessage = '';
let testableInteraction = () => {};

export const setTestableInteraction = (newInteraction) => {
  testableInteraction = newInteraction;
};

export const Alert = (
  title: string,
  message: string,
  options: (resolve: any, reject: any) => any,
) => {
  if (process.env.NODE_ENV?.trim() === 'test') {
    testableTitle = title;
    testableMessage = message;
    return testableInteraction;
  } else {
    return new Promise((resolve, reject) => {
      RNAlert.alert(title, message, options(resolve, reject));
    });
  }
};
