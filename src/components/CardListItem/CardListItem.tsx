import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {
  addItemToCart,
  removeItemFromCart,
} from "../../../src/store/productSlice";
import { ICartItem } from "../../types/types";
import styles from "./styles";

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
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    console.warn("increase");
    dispatch(addItemToCart({ product: cartItem.product, size: cartItem.size }));
  };

  const decreaseQuantity = () => {
    dispatch(
      removeItemFromCart({ product: cartItem.product, size: cartItem.size })
    );
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
            <Pressable onPress={decreaseQuantity}>
              <FontAwesome5 name={"minus-circle"} size={24} color="gray" />
            </Pressable>
            <Text style={quantity}>{cartItem.quantity}</Text>
            <Pressable onPress={increaseQuantity}>
              <FontAwesome5 name={"plus-circle"} size={24} color="gray" />
            </Pressable>
          </View>
          <Text style={itemTotal}>
            {cartItem.product.price * cartItem.quantity}US$
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
