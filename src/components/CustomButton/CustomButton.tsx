import { PropsWithChildren } from "react";
import { Pressable, ViewStyle, FlexStyle, View } from "react-native";
import React from "react";

import { styles } from "./style";

type IContainer = ViewStyle & FlexStyle;
export interface IProps {
  customStyle?: IContainer;
  onPress: () => void;
}

const { outerContainer, innerContainer, buttonPressed } = styles;

const Button: React.FC<PropsWithChildren<IProps>> = ({
  customStyle = {},
  onPress = () => {},
  children,
}) => {
  return (
    <View style={outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [innerContainer, customStyle, buttonPressed]
            : [innerContainer, customStyle]
        }
        onPress={onPress}
        android_ripple={{ color: "#eee" }}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default Button;
