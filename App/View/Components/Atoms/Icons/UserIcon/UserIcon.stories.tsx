import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { COLORS } from "../../../../global/colors";

import UserIcon from "./index";

const UserIconStories = storiesOf("Atoms/Icons", module);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: COLORS.background,
  },
});

UserIconStories.add("UserIcon/Host", () => {
  return (
    <View style={styles.container}>
      <UserIcon iconColor="host" />
    </View>
  );
});
