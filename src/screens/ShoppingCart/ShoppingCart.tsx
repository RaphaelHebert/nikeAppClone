import { View, FlatList, Text, useWindowDimensions } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardListItem, CustomButton } from "../../components";
import { ICartItem, IState, ICart } from "../../types/types";
import styles from "./styles";
import productDetailScreenCard from "../ProductDetailScreen/styles";

const { footerComponentContainer, row, text, textBold, customContainer } =
  styles;
const { buttonTextStyle } = productDetailScreenCard;

const FooterComponent: React.FC = () => {
  const { width } = useWindowDimensions();
  const cart = useSelector((state) => (state as IState).cart);
  const subtotal = Object.keys(cart).reduce(
    (acc, key) => acc + cart[key].product.price * cart[key].quantity,
    0
  );
  return (
    <View style={[footerComponentContainer, { width }]}>
      <View style={row}>
        <View>
          <Text style={text}>SubTotal</Text>
        </View>
        <View>
          <Text style={text}>{subtotal} US$</Text>
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
          <Text style={[text, textBold]}>{subtotal + 20} US$</Text>
        </View>
      </View>
    </View>
  );
};

const ShoppingCart: React.FC = () => {
  const cart: ICart = useSelector((state) => (state as IState).cart);

  function confirmBuy() {
    console.warn("clicked confirm buy button");
  }

  const actualCart = Object.values(cart).filter((item) => item.quantity > 0);
  return (
    <View>
      <FlatList
        data={actualCart}
        renderItem={({ item }: { item: ICartItem }) => {
          return <CardListItem cartItem={item} />;
        }}
        ListFooterComponent={FooterComponent}
      />
      <CustomButton onPress={confirmBuy} customStyle={customContainer}>
        <Text style={buttonTextStyle}>Checkout</Text>
      </CustomButton>
    </View>
  );
};

export default ShoppingCart;
