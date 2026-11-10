import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WorkoutScreen({ route, navigation }: any) {
  const { exercise } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <Image source={exercise.image} style={styles.bgImage} blurRadius={10} />
      <View style={styles.overlay} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{exercise.name}</Text>
        <Text style={styles.target}>{exercise.target}</Text>
        
        <View style={styles.card}>
          <Text style={styles.repsText}>Get Ready!</Text>
          <Text style={styles.subText}>Camera tracking would start here.</Text>
        </View>

        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>Finish & Go Back</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#000" },
  bgImage: { ...StyleSheet.absoluteFillObject, opacity: 0.6 },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)" },
  content: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 40, fontWeight: "800", color: "#fff", marginBottom: 8 },
  target: { fontSize: 18, color: "#cbd5e1", marginBottom: 40, fontWeight: "500" },
  card: { backgroundColor: "rgba(255,255,255,0.1)", padding: 24, borderRadius: 24, width: "100%", alignItems: "center", borderWidth: 1, borderColor: "rgba(255,255,255,0.2)" },
  repsText: { fontSize: 24, fontWeight: "700", color: "#fff", marginBottom: 8 },
  subText: { fontSize: 14, color: "#94a3b8" },
  backBtn: { backgroundColor: "#fff", paddingVertical: 16, paddingHorizontal: 32, borderRadius: 100, marginTop: 40 },
  backBtnText: { fontSize: 16, fontWeight: "700", color: "#000" },
});
