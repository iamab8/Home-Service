import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import Colors from "../../Utils/Colors";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/1.png")}
        style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 27, color: Colors.White, textAlign: "center" }}
        >
          Let's Find
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and Repare
          </Text>
          services.
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: Colors.White,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Best App to find services near you which deliver you a professional
          services.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{ fontSize: 18, textAlign: "center", color: Colors.Primary }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    width: 350,
    height: 510,
    marginTop: 45,
    borderWidth: 4,
    borderColor: Colors.Black,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  subContainer: {
    width: "100%",
    backgroundColor: Colors.Primary,
    height: "60%",
    marginTop: -22,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  button: {
    padding: 15,
    backgroundColor: Colors.White,
    borderRadius: 99,
    marginTop: 45,
  },
});
