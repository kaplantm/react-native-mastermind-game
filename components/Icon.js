import React from "react";
import { Icon } from "expo";

import Colors from "../shared/Colors";

export default class IconComponent extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginTop: 5 }}
        color={
          this.props.lightScheme
            ? Colors.colorKey.darkGrey
            : Colors.colorKey.blue
        }
      />
    );
  }
}
