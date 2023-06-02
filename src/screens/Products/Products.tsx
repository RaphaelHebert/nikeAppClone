import { FlatList, Image } from 'react-native';
import React from 'react';

import products from '../../assets/data/products';
import styles from './styles';

const { productImage } = styles;

const Products = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Image
          style={productImage}
          source={{ uri: item.image }}
          key={`productImage_${index}`}
        />
      )}
      numColumns={2}
    />
  );
};

export default Products;
