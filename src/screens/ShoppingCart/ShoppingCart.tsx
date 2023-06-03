import {
  View,
  FlatList,
  Text,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React from 'react';

import { CardListItem, CustomButton } from '../../components';
import cart from '../../assets/data/cart';
import { ICartItem } from '../../types/types';
import styles from './styles';
import productDetailScreenCard from '../ProductDetailScreen/styles';

const { footerComponentContainer, row, text, textBold, customContainer } =
  styles;
const { buttonTextStyle, buttonStyle } = productDetailScreenCard;

const FooterComponent: React.FC = () => {
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

const ShoppingCart: React.FC = () => {
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
      <CustomButton onPress={confirmBuy} customStyle={customContainer}>
        <Text style={buttonTextStyle}>Checkout</Text>
      </CustomButton>
      {/* <Pressable style={[buttonStyle, checkoutButton]} onPress={confirmBuy}>
        
      </Pressable> */}
    </View>
  );
};

export default ShoppingCart;
