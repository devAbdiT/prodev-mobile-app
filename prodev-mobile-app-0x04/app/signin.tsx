import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

export default function SignIn() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styless.container}>
        <View style={styless.navGroup}>
          <TouchableOpacity onPress={() => router.back()}>
            {" "}
            {/* Add this wrapper */}
            <Ionicons name="arrow-back" size={25} />
          </TouchableOpacity>
          <Image source={require("@/assets/images/logo.png")} />
        </View>
        <Text style={styless.largeText}>Sign in to your</Text>
        <Text style={styless.largeText}>Account</Text>
        <Text style={styless.smallText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styless.formGroup}>
          <View>
            <Text style={styless.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styless.inputField}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styless.placeholderText}>Password</Text>
            <View style={styless.passwordGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
          <Text style={styless.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styless.button}>
          <Text style={styless.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styless.dividerGroup}>
          <View style={styless.divider}></View>
          <Text style={styless.dividerText}>OR</Text>
          <View style={styless.divider}></View>
        </View>

        <View style={styless.socialMediaButtonGroup}>
          <TouchableOpacity style={styless.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styless.socialMediaButtonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styless.socialMediaButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styless.socialMediaButtonText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styless.subTextGroup}>
          <Text style={styless.subText}>Don't have an account?</Text>
          <Text style={styless.subTextJoin}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    position: "relative",
  },
  navGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 11,
  },
  largeText: {
    fontSize: 40,
    fontWeight: 700,
  },
  smallText: {
    fontSize: 12,
    color: "#7E7B7B",
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
  formGroup: {
    marginTop: 44,
  },
  forgotPasswordText: {
    fontSize: 17,
    marginTop: 9,
    textAlign: "right",
    color: "#34967C",
  },
  button: {
    backgroundColor: "#2B876E",
    height: 53,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 17,
    color: "white",
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
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 29,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#c2c2c2",
    flex: 1,
  },
  dividerText: {
    fontSize: 17,
    color: "#C2C2C2",
  },
  subTextGroup: {
    flexDirection: "row",
    position: "absolute",
    bottom: 33,
    left: 77,
    right: 76,
  },
  subText: {
    fontSize: 18,
    color: "#b5b5b5",
  },
  subTextJoin: {
    fontSize: 18,
    color: "#FFA800",
    fontWeight: 600,
  },
});

export { styless };
