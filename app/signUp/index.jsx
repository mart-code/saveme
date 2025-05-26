// import auth from "@react-native-firebase/auth";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActivityIndicator, TextInput } from "react-native-web";
import { auth } from "../../firebase/config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const goToSignIn = () => {
    router.push("/signIn");
  };

  const signUp = async () => {
    setLoading(true);
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        router.push("/");
      } else {
        alert("passords don't match");
      }
    } catch (error) {
      alert("Registration failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry
        />
        {loading ? (
          <ActivityIndicator size={"small"} style={{ margin: 28 }} />
        ) : (
          <Button onPress={signUp} title="Sign Up" />
        )}

        {/* Redirect to Sign In */}
        <TouchableOpacity onPress={goToSignIn} style={styles.signInLink}>
          <Text style={styles.signInText}>
            Have an account? <Text style={styles.signInButton}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  signInLink: {
    marginTop: 16,
    alignItems: "center",
  },
  signInText: {
    fontSize: 14,
    color: "#555",
  },
  signInButton: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
