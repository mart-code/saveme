import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ForgotPasswordScreen = () => {

  const [username, setUsername] = useState("");

  const onSendPressed = () => {
    console.warn("onSendPressed");
    router.push('/newPassword')
  };
  const onSignInPressed = () => {
    console.warn("onSignInPressed");
    router.push('/signIn')
  };



  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.title}>Reset your Password</Text>
        <CustomInput
          placeholder="Enter your code"
          value={username}
          setValue={setUsername}
        />
        <CustomButton text="Send" action={onSendPressed} />

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

export default ForgotPasswordScreen;
