import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState("");

  const onConfirmPressed = () => {
    console.warn("onConfirmPressed");
    router.push('/home')
  };
  const onSignInPressed = () => {
    console.warn("onSignInPressed");
    router.push('/signIn')
  };
  const onResendPressed = () => {
    console.warn("onResendPressed");
    
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" action={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          action={onResendPressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
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

export default ConfirmEmailScreen;
