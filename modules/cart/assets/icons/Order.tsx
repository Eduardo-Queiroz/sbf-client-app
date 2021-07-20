import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M5.8 3a.86.86 0 00-.8.8v14.4l-1.6-1.6a.785.785 0 00-1.1 0 .864.864 0 00-.3.6 1.421 1.421 0 00.2.6l3 3a1.421 1.421 0 00.6.2 1.421 1.421 0 00.6-.2l3-3a.735.735 0 00.2-.6 1.421 1.421 0 00-.2-.6.785.785 0 00-1.1 0l-1.6 1.6V3.8a1.063 1.063 0 00-.9-.8z"
        data-name="Path 492"
      />
      <Path
        d="M15.5 15.5h-4.1a.86.86 0 01-.8-.8.86.86 0 01.8-.8h4.1a.86.86 0 01.8.8.736.736 0 01-.8.8z"
        data-name="Path 493"
      />
      <Path
        d="M18.4 10.1h-6.9a.86.86 0 01-.8-.8.86.86 0 01.8-.8h6.9a.86.86 0 01.8.8.86.86 0 01-.8.8z"
        data-name="Path 494"
      />
      <Path
        d="M21.2 4.6h-9.8a.86.86 0 01-.8-.8.86.86 0 01.8-.8h9.8a.86.86 0 01.8.8.86.86 0 01-.8.8z"
        data-name="Path 495"
      />
      <Path
        d="M12.7 21h-1.3a.86.86 0 01-.8-.8.86.86 0 01.8-.8h1.3a.86.86 0 01.8.8.86.86 0 01-.8.8z"
        data-name="Path 496"
      />
    </Svg>
  );
}

export default SvgComponent;
