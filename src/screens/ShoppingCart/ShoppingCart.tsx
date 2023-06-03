import {
  View,
  FlatList,
  Text,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React from 'react';

import { CardListItem } from '../../components';
import cart from '../../assets/data/cart';
import { ICartItem } from '../../types/types';
import styles from './styles';
import productDetailScreenCard from '../ProductDetailScreen/styles';

const { footerComponentContainer, row, text, textBold, checkoutButton } =
  styles;
const { buttonTextStyle, buttonStyle } = productDetailScreenCard;

const FooterComponent = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={[footerComponentContainer, { width }]}>
      <View style={row}>
        <View>
          <Text style={text}>SubTotal</Text>
        </View>
        <View>
          <Text style={text}>420 US$</Text>
        </View>
      </View>
      <View style={row}>
        <View>
          <Text style={text}>Delivery</Text>
        </View>
        <View>
          <Text style={text}>20 US$</Text>
        </View>
      </View>
      <View style={row}>
        <View>
          <Text style={[text, textBold]}>Total</Text>
        </View>
        <View>
          <Text style={[text, textBold]}>440 US$</Text>
        </View>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartList: ICartItem[] = cart;

  function confirmBuy() {
    console.warn('clicked confirm buy button');
  }

  return (
    <View>
      <FlatList
        data={cartList}
        renderItem={({ item }: { item: ICartItem }) => (
          <CardListItem cartItem={item} />
        )}
        ListFooterComponent={FooterComponent}
      />
      <Pressable style={[buttonStyle, checkoutButton]} onPress={confirmBuy}>
        <Text style={buttonTextStyle}>Checkout</Text>
      </Pressable>
    </View>
  );
};

export default ShoppingCart;
