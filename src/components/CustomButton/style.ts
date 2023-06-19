import { StyleSheet, ViewStyle } from "react-native";

export interface Style {
  container: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    position: "absolute",
    bottom: 65,
    padding: 17,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#000",
    borderRadius: 100,
    alignItems: "center",
  },
});
