import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerComponentContainer: {
    padding: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'grey',
  },
  textBold: {
    fontWeight: '900',
  },
  customContainer: {
    position: 'relative',
    marginTop: 10,
  },
});
