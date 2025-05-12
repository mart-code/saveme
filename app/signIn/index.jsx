import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Logo from "../../assets/images/favicon.png";
import SocialSignInButtons from "../../components/SocialSignInButtons/SocialSignInButtons";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Sign in");
    //validate user
    router.push("/home");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
    router.push('/forgotPassword')
  };

  const onSignUpPress = () => {
    console.warn("Sign up");
    router.push('/signUp')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" action={onSignInPressed} />
        <CustomButton
          text="Forgot Password"
          action={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        {/* <CustomButton
        text="Sign In with Apple"
        action={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      /> */}
        <CustomButton
          text="Don't have an account? Create one"
          action={onSignUpPress}
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
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 100,
    marginBottom: 100,
  },
});

export default SignInScreen;
