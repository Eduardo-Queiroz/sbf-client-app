import {EventEmitter} from 'events';

export interface ModalParams {
  text?: string;
  title?: string;
  okButtonText?: string;
}

class Modal {
  private static instance: Modal;
  private eventEmitter: EventEmitter;

  private constructor() {
    this.eventEmitter = new EventEmitter();
  }

  public static getInstance() {
    if (!Modal.instance) {
      Modal.instance = new Modal();
    }
    return Modal.instance;
  }

  private fire = (
    toggle: boolean,
    type: string,
    params?: any,
  ): Promise<string | boolean> => {
    this.eventEmitter.emit('fire', {toggle, type, params});
    return new Promise(resolve => {
      this.eventEmitter.on(`extinguish`, (value?: string | boolean) => {
        resolve(value);
      });
    });
  };

  public open = (type: string, params?: any): Promise<string | boolean> => {
    return this.fire(true, type, params);
  };

  public close = (type: string, params?: any): boolean => {
    return this.eventEmitter.emit('fire', {toggle: false, type, params});
  };

  public extinguish = (params?: string | boolean) => {
    this.eventEmitter.emit('extinguish', params);
  };

  public watch = (callback: (type: string, params?: any) => void) => {
    this.eventEmitter.on('fire', callback);
  };

  public unWatch = (
    callback: (type: string, params?: any) => void = () => {},
  ) => {
    this.eventEmitter.removeListener('fire', callback);
    this.eventEmitter.removeListener(`extinguish`, callback);
  };
}

export const ModalServices = Modal.getInstance();
