import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M15 4.8H3.5a.86.86 0 00-.8.8.86.86 0 00.8.8H15a3.211 3.211 0 003.1 2.4 3.159 3.159 0 003.2-3.2 3.159 3.159 0 00-3.2-3.2A3.3 3.3 0 0015 4.8zm4.7.8A1.6 1.6 0 1118.1 4a1.58 1.58 0 011.6 1.6z"
        data-name="Path 489"
      />
      <Path
        d="M20.5 11.2H9a3.211 3.211 0 00-3.1-2.4 3.2 3.2 0 100 6.4A3.211 3.211 0 009 12.8h11.5a.86.86 0 00.8-.8.789.789 0 00-.8-.8zM5.9 13.5a1.6 1.6 0 111.6-1.6 1.58 1.58 0 01-1.6 1.6z"
        data-name="Path 490"
      />
      <Path
        d="M18.1 15.1a3.211 3.211 0 00-3.1 2.4H3.5a.8.8 0 100 1.6H15a3.211 3.211 0 003.1 2.4 3.159 3.159 0 003.2-3.2 3.222 3.222 0 00-3.2-3.2zm0 4.8a1.6 1.6 0 111.6-1.6 1.58 1.58 0 01-1.6 1.6z"
        data-name="Path 491"
      />
    </Svg>
  );
}

export default SvgComponent;
