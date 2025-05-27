import { Platform, StyleSheet, Text, View } from "react-native";
// Import MapView conditionally to avoid errors during web bundling
let MapView = null;
if (Platform.OS === "ios" || Platform.OS === "android") {
  MapView = require("react-native-maps").default;
}

export default function MapScreen() {
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <Text>Map feature is not available on web.</Text>
        {/* You could optionally embed a Google Maps iframe or a static image here for web */}
      </View>
    );
  }

  if (!MapView) {
    // Fallback for cases where MapView couldn't be loaded (e.g., during build, though Platform.OS should handle it)
    return (
      <View style={styles.container}>
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
