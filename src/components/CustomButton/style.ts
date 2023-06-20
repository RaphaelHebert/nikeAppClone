import { StyleSheet, ViewStyle } from "react-native";

export interface Style {
  innerContainer: ViewStyle;
  outerContainer: ViewStyle;
  buttonPressed: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  innerContainer: {
    alignItems: "center",
    padding: 17,
  },
  outerContainer: {
    overflow: "hidden",
    borderRadius: 100,
    position: "absolute",
    bottom: 65,
    width: "90%",
    backgroundColor: "#000",
    alignSelf: "center",
    elevation: 2,
  },
  buttonPressed: {
    opacity: 0.6,
  },
});
