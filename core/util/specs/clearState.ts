import {ActionProcolType, store} from '@sbf-providers/redux';
import {navigate, ScreenType} from '@sbf-providers/navigation';

export const clearState = () => {
  store.dispatch({type: ActionProcolType.LOGOUT});
  navigate(ScreenType.HOME);
};
