import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export default function BgLogo(props: SvgProps) {
  return (
    <Svg width={102} height={130} fill="none" {...props}>
      <Path
        d="M.603 127.313L1.527 2.675C1.538 1.09 3.3.148 4.625 1.018l95.639 62.843a2 2 0 01-.02 3.356L3.681 129.013c-1.337.855-3.09-.113-3.078-1.7z"
        fill="#1D2452"
      />
    </Svg>
  );
}
