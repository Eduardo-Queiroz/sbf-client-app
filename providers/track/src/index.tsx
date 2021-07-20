import React, {PureComponent} from 'react';
import {track} from '../tracks';
export * from '../tracks';

interface TrackContext {
  track: Tracks;
}

const context = React.createContext<TrackContext>({track});

export class TrackProvider extends PureComponent<TrackContext> {
  public render() {
    const {children} = this.props;
    return <context.Provider value={{track}}>{children}</context.Provider>;
  }
}
export const useTrack = () => {
  const {track} = React.useContext<TrackContext>(context);
  return track;
};
