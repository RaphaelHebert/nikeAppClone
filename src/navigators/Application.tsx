import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useTheme } from '../hooks';

import { ShoppingCart } from '../screens';
import styles from './styles';

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <View style={styles.outerContainer}>
        {/* <Products /> */}
        <ShoppingCart />
      </View>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
