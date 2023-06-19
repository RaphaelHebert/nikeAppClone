import { useEffect } from "react";
import { FlatList, Image, Pressable, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import { TopRightIcon } from "../../components";
import { setSelectedProduct } from "../../store/productSlice";
import { IProduct, IState } from "../../types/types";

import styles from "./styles";

const { productImage, productContainer, iconContainer, iconText } = styles;

const Products = ({ navigation }: { navigation: any }) => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector((state) => (state as IState).products);

  console.warn(products);

  useEffect(() => {
    nav.setOptions({
      headerRight: () => <TopRightIcon navigation={navigation} />,
    });
  }, []);

  function checkDetails(item: IProduct) {
    dispatch(setSelectedProduct(item));
    navigation.navigate("ProductDetailScreen");
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => checkDetails(item)} style={productContainer}>
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
