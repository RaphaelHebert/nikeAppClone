import { View, FlatList } from 'react-native';
import React from 'react';

import { CardListItem } from '../../components';
import cart from '../../assets/data/cart';
// eslint-disable-next-line
import { ICartItem } from '../../types/types';

const ShoppingCart = () => {
  const cartList: ICartItem[] = cart;

  return (
    <View>
      <FlatList
        data={cartList}
        renderItem={({ item }: { item: ICartItem }) => (
          <CardListItem cartItem={item} />
        )}
      />
    </View>
  );
};

export default ShoppingCart;
