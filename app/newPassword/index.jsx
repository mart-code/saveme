import CustomButton from "@/components/CustomButton/CustomButton";
import CustomInput from "@/components/CustomInput/CustomInput";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const NewPasswordScreen = () => {

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onSubmitPressed = () => {
    console.warn("onSubmitPressed");
    router.push('/home')
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
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" action={onSubmitPressed} />

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

export default NewPasswordScreen;
