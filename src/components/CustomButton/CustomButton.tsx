import { PropsWithChildren } from 'react';
import { Pressable, ViewStyle, FlexStyle } from 'react-native';
import React from 'react';

import { styles } from './style';

interface IProps {
  customStyle: ViewStyle & FlexStyle;
  onPress: () => void;
}

const { container } = styles;

const Button: React.FC<PropsWithChildren<IProps>> = ({
  onPress = () => console.warn('clicked button'),
  customStyle = {},
  children,
}) => {
  return (
    <Pressable style={[container, customStyle]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;
