import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  productImage: {
    width: '100%',
    aspectRatio: 1,
    padding: 1,
  },
  productContainer: {
    width: '50%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
    paddingRight: 5,
  },
});
