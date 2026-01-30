import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  titleTextGroup: {
    marginTop: 20,
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#7E7B7B",
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: "#7B7B7B",
    marginBottom: 7,
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordControl: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: 300,
  },
  secondaryButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  secondaryButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 400,
  },
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    left: 77,
    right: 76,
    bottom: 33,
  },
  signupTitleText: {
    fontSize: 18,
    fontWeight: 400,
  },
  signupSubTitleText: {
    fontSize: 18,
    fontWeight: 600,
    color: "#FFA800",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: 500,
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 9,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },

  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 11,
  },

  placeholderText: {
    fontSize: 18,
    color: "#7E7B7B",
    marginBottom: 7,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#7E7B7B",
    paddingHorizontal: 10,
  },
  passwordGroup: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#7e7b7b",
  },

  socialMediaButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  socialMediaButtonText: {
    fontSize: 18,
    color: "#0D0D0D",
    fontWeight: 400,
  },
  socialMediaButtonGroup: {
    gap: 15,
    marginTop: 25,
  },

  subTextGroup: {
    flexDirection: "row",
    position: "absolute",
    bottom: 33,
    left: 77,
    right: 76,
  },

  subTextJoin: {
    fontSize: 18,
    color: "#FFA800",
    fontWeight: 600,
  },
});

export { styles };
