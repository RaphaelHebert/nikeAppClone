import { PropsWithChildren } from "react";
import { Pressable, ViewStyle, FlexStyle } from "react-native";
import React from "react";

import { styles } from "./style";

type IContainer = ViewStyle & FlexStyle;
export interface IProps {
  customStyle?: IContainer;
  onPress: () => void;
}

const { container } = styles;

const Button: React.FC<PropsWithChildren<IProps>> = ({
  customStyle = {},
  onPress = () => {},
  children,
}) => {
  return (
    <Pressable style={[container, customStyle]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
