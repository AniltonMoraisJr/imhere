import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#000",
    padding: 32,
    paddingTop: 64,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  subTitle: {
    color: "#808080",
  },
  inputWrapper: {
    flexDirection: "row",
    marginTop: 32,
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#353535",
    color: "#fff",
  },
  buttonAdd: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#00d000",
    width: 60,
    height: 60,
  },
  buttonAddText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default styles;
