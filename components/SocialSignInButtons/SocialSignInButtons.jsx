import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };
  const onSignInGoogle = () => {
    console.warn("Google");
  };
  return (
    <View style={styles.container}>
      <CustomButton
        text="Sign In with Facebook"
        action={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        action={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default SocialSignInButtons;
