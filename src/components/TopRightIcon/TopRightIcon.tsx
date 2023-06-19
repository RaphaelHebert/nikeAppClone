import { Pressable, Text } from "react-native";
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from "react-redux";
import { IState } from "ReactNativeTemplate/src/types/types";

import styles from "./styles";
const { iconContainer, iconText } = styles;

const TopRightIcon = ({ navigation }: { navigation: any }) => {
  const items = useSelector((state) => (state as IState).cart);

  const numberOfItems =
    Object.keys(items).reduce(
      (quantity, key) => quantity + items[key].quantity,
      0
    ) || 0;
  return (
    <Pressable
      style={iconContainer}
      onPress={() => navigation.navigate("ShoppingCart")}
    >
      <Text style={iconText}>{numberOfItems}</Text>
      {/* <FontAwesome5 name={'shopping-cart'} size={24} color="gray" /> */}
    </Pressable>
  );
};

export default TopRightIcon;
