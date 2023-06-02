import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  titleStyle: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: '500',
  },
  descriptionStyle: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 10,
    lineHeight: 30,
  },
  innerContainer: {
    padding: 20,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 25,
    padding: 20,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#000',
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 16,
  },
});
