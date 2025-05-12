import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import SocialSignInButtons from "@/components/SocialSignInButtons/SocialSignInButtons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onPrivacyPolicyPressed = () => {
    console.warn("onPrivacyPolicyPressed");
  };
  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };
  const onSignInPressed = () => {
    console.warn("onSignInPressed");
    router.push('/signIn')  };
  const onRegisterPressed = () => {
    console.warn("Register");
    router.push('/confirmEmail')
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    router.push('/forgotPassword')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton text="Register" action={onRegisterPressed} />
        <Text>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            {" "}
            Privacy Policy
          </Text>
        </Text>
        <CustomButton
          text="Forgot Password"
          action={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
          action={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    margin: 10,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB875",
  },
});

export default SignUpScreen;
