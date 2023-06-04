import {
  FlatList,
  Image,
  View,
  useWindowDimensions,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';

import { IProduct } from '../../types/types';
import products from '../../assets/data/products';

import { CustomButton } from '../../components';
import styles from './styles';

const {
  titleStyle,
  priceStyle,
  descriptionStyle,
  innerContainer,
  buttonStyle,
  buttonTextStyle,
} = styles;

const ProductDetailScreen = () => {
  const product: IProduct = products[0];
  const { width } = useWindowDimensions();

  function addToCart() {
    console.warn('added to cart');
  }

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            // eslint-disable-next-line react-native/no-inline-styles
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
        />
        <View style={innerContainer}>
          <Text style={titleStyle}>{product.name}</Text>
          <Text style={priceStyle}>{product.price}</Text>
          <Text style={descriptionStyle}>{product.description}</Text>
        </View>
      </ScrollView>
      <CustomButton onPress={addToCart}>
        <Text style={buttonTextStyle}>Add to Cart</Text>
      </CustomButton>
    </View>
  );
};

export default ProductDetailScreen;
