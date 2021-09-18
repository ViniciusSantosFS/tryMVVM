import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../../../global/colors";

interface props {
  iconColor: "guest" | "host";
}

export default function PlusIcon({ iconColor }: props) {
  const color = iconColor === "guest" ? COLORS.success : COLORS.warn;

  return <AntDesign name="user" size={16} color={color} />;
}
