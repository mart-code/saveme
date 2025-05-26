// app/dashboard/index.jsx
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';



export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [healthCenters, setHealthCenters] = useState([
    { id: 1, name: "City General Hospital", latitude: 37.78825, longitude: -122.4324, distance: "1.2 km" },
    { id: 2, name: "Central Medical Clinic", latitude: 37.7749, longitude: -122.4194, distance: "2.5 km" },
    { id: 3, name: "Community Health Center", latitude: 37.7845, longitude: -122.4087, distance: "3.1 km" },
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const emergencyOptions = [
    { id: 1, title: "Report Accident", icon: "alert-circle", color: "#ef4444" },
    { id: 2, title: "Request Firefighter", icon: "flame", color: "#f97316" },
    { id: 3, title: "Chat with Doctor", icon: "medical", color: "#3b82f6" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Emergency Options Section */}
      <Text style={styles.sectionTitle}>Emergency Services</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {emergencyOptions.map((option) => (
          <TouchableOpacity 
            key={option.id} 
            style={[styles.emergencyCard, { backgroundColor: option.color }]}
            onPress={() => console.log(option.title)}
          >
            <Ionicons name={option.icon} size={30} color="white" />
            <Text style={styles.emergencyText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Nearby Health Centers Section */}
      <Text style={styles.sectionTitle}>Nearby Health Centers</Text>
      {errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : location ? (
        <View style={styles.mapContainer}>


          <View style={styles.centersList}>
            {healthCenters.map((center) => (
              <TouchableOpacity 
                key={center.id} 
                style={styles.centerCard}
                onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${center.latitude},${center.longitude}`)}
              >
                <Ionicons name="medkit" size={24} color="#3b82f6" />
                <View style={styles.centerInfo}>
                  <Text style={styles.centerName}>{center.name}</Text>
                  <Text style={styles.centerDistance}>{center.distance} away</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#64748b" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading your location...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8fafc',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1e293b',
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  emergencyCard: {
    width: 120,
    height: 120,
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyText: {
    color: 'white',
    marginTop: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  centersList: {
    marginTop: 12,
  },
  centerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  centerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  centerName: {
    fontWeight: '500',
    color: '#1e293b',
  },
  centerDistance: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 4,
  },
  errorText: {
    color: '#ef4444',
    textAlign: 'center',
    marginVertical: 20,
  },
  loadingText: {
    color: '#64748b',
    textAlign: 'center',
    marginVertical: 20,
  },
});