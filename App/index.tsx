import React from "react";
import StorybookUI from "../storybook";

import Routes from "./ViewModel/Routes";

module.exports = __DEV__ ? StorybookUI : Routes;
