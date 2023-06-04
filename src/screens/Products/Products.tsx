import { useEffect } from 'react';
import { FlatList, Image, Pressable, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import products from '../../assets/data/products';
import styles from './styles';

const { productImage, productContainer, iconContainer, iconText } = styles;

const TopRightIcon = ({ navigation }) => {
  return (
    <Pressable
      style={iconContainer}
      onPress={() => navigation.navigate('ShoppingCart')}
    >
      <Text style={iconText}>1</Text>
      <FontAwesome5 name={'shopping-cart'} size={24} color="gray" />
    </Pressable>
  );
};

const Products = ({ navigation }) => {
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => <TopRightIcon navigation={navigation} />,
    });
  }, []);
  function checkDetails() {
    console.warn('navigate');
    navigation.navigate('ProductDetailScreen');
  }
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Pressable onPress={checkDetails} style={productContainer}>
          <Image
            style={productImage}
            source={{ uri: item.image }}
            key={`productImage_${index}`}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default Products;
