import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Pressable } from "react-native";

export default function DashboardScreen() {
  const [streak] = useState(6);
  
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greeting}>👋 Hi, Alex!</Text>
        <Text style={styles.sub}>Ready to move today?</Text>

        <View style={styles.card}>
          <Text style={styles.streakNum}>🔥 {streak}-day streak</Text>
          <Text style={styles.streakText}>Keep it up!</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.statCard}>
            <Text style={styles.statVal}>24</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statVal}>412</Text>
            <Text style={styles.statLabel}>Minutes</Text>
          </View>
        </View>

        <Pressable style={styles.bigBtn}>
          <Text style={styles.bigBtnText}>▶ Start Workout</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0a0e1a" },
  container: { padding: 20 },
  greeting: { fontSize: 32, fontWeight: "800", color: "#fff" },
  sub: { fontSize: 18, color: "#8892a8", marginTop: 4, marginBottom: 24 },
  card: { backgroundColor: "#1e2740", padding: 24, borderRadius: 16, alignItems: "center", marginBottom: 20 },
  streakNum: { fontSize: 36, fontWeight: "800", color: "#ffb84d" },
  streakText: { fontSize: 16, color: "#fff", marginTop: 8 },
  row: { flexDirection: "row", gap: 16, marginBottom: 32 },
  statCard: { flex: 1, backgroundColor: "#0f1424", padding: 20, borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: "#1e2740" },
  statVal: { fontSize: 32, fontWeight: "800", color: "#a6ffff" },
  statLabel: { fontSize: 16, color: "#8892a8", marginTop: 4 },
  bigBtn: { backgroundColor: "#a6ffff", padding: 20, borderRadius: 16, alignItems: "center" },
  bigBtnText: { fontSize: 20, fontWeight: "800", color: "#0a0e1a" }
});
