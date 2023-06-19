import {
  FlatList,
  Image,
  View,
  useWindowDimensions,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, IState } from '../../types/types';
import { CustomButton } from '../../components';
import { addItemToCart } from '../../store/productSlice';
import styles from './styles';

const {
  titleStyle,
  priceStyle,
  descriptionStyle,
  innerContainer,
  buttonTextStyle,
} = styles;

// TODO : implement select size options

const ProductDetailScreen = () => {
  const dispatch = useDispatch();
  const product: IProduct = useSelector(
    state => (state as IState).selectedProduct,
  );

  //const product: IProduct = products[0];
  const { width } = useWindowDimensions();

  function addToCart() {
    const actionToDispatch = addItemToCart({
      product,
      size: 44, // default size as size cannot be selected atm
    });
    dispatch(actionToDispatch);
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
