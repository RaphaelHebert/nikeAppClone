import React from 'react';
import { Text, View } from 'react-native';

import { useTheme } from '../../hooks';

const Home = () => {
  const { Layout } = useTheme();

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Text>Hello world</Text>
    </View>
  );
};

export default Home;
