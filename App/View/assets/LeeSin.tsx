import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

export default function LeeSin(props: SvgProps) {
  return (
    <Svg width={250} height={298} fill="none" {...props}>
      <Path
        transform="matrix(-1 0 0 1 250 .514)"
        fill="url(#prefix__pattern0)"
        d="M0 0h250v297H0z"
      />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.0017 0 0 .00143 -.002 0)"
          />
        </Pattern>
        <Image id="prefix__image0" width={591} height={700} />
      </Defs>
    </Svg>
  );
}
