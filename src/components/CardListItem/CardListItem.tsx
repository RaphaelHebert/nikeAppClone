import React from 'react';
import { View, Text, Image } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ICartItem } from '../../types/types';
import styles from './styles';

const {
  container,
  contentContainer,
  image,
  name,
  size,
  footer,
  quantity,
  itemTotal,
  spaceBetween,
} = styles;

interface IProps {
  cartItem: ICartItem;
}
const CartListItem: React.FC<IProps> = ({ cartItem }) => {
  const increaseQuantity = () => {
    console.warn('clicked increase');
  };

  const decreaseQuantity = () => {
    console.warn('clicked decrease');
  };

  return (
    <View style={container}>
      <Image source={{ uri: cartItem.product.image }} style={image} />
      <View style={contentContainer}>
        <View>
          <Text style={name}>{cartItem.product.name}</Text>
          <Text style={size}>Size {cartItem.size}</Text>
        </View>

        <View style={[footer, spaceBetween]}>
          <View style={footer}>
            <FontAwesome5
              name={'minus-circle'}
              onPress={decreaseQuantity}
              size={24}
              color="gray"
            />
            <Text style={quantity}>{cartItem.quantity}</Text>
            <FontAwesome5
              name={'plus-circle'}
              onPress={increaseQuantity}
              size={24}
              color="gray"
            />
          </View>
          <Text style={itemTotal}>${cartItem.product.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
