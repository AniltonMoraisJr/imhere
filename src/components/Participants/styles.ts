import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#262626",
    marginVertical: 8,
  },
  text: {
    flex: 1,
    justifyContent: "center",
    fontSize: 16,
    marginHorizontal: 12,
    marginVertical: 16,
    color: "#f2f2f2",
  },
  button: {
    height: "100%",
    padding: 12,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#e25858",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
