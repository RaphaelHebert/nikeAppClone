import React from 'react';
import { SafeAreaView, StatusBar, Pressable, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '../hooks';

import { ShoppingCart, ProductDetailScreen, Products } from '../screens';
import styles from './styles';

const Stack = createNativeStackNavigator();
// @refresh reset

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' },
        }}
      >
        {/* <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}> */}
        {/* <Products /> */}
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{ presentation: 'modal' }}
        />
        {/* <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} /> */}
        {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
