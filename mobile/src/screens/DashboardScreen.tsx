import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";

type Props = { onBack: () => void };

type StatItem = { label: string; value: string; change: string; trend: "up" | "down"; color: string };

const STATS: StatItem[] = [
  { label: "Workouts", value: "24", change: "3 this week", trend: "up", color: "#a6ffff" },
  { label: "Minutes", value: "412", change: "8.2%", trend: "up", color: "#8b5cf6" },
  { label: "Calories", value: "8,240", change: "12.5%", trend: "up", color: "#10b981" },
  { label: "Streak", value: "6 days", change: "1 day", trend: "down", color: "#f59e0b" },
];

const BARS = [
  { day: "Mon", h: 45 }, { day: "Tue", h: 65 }, { day: "Wed", h: 55 },
  { day: "Thu", h: 80 }, { day: "Fri", h: 70 }, { day: "Sat", h: 90 }, { day: "Sun", h: 75 },
];

const RECENT = [
  { name: "Push-ups", reps: "3 x 15", time: "Today, 8:12 AM", color: "#a6ffff" },
  { name: "Squats", reps: "3 x 12", time: "Yesterday, 6:40 PM", color: "#8b5cf6" },
  { name: "Plank", reps: "3 x 45s", time: "Yesterday, 6:15 PM", color: "#10b981" },
  { name: "Lunges", reps: "3 x 10", time: "Oct 22, 7:05 PM", color: "#f59e0b" },
];

export default function DashboardScreen({ onBack }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>Your fitness overview</Text>
          </View>
          <Pressable style={styles.backBtn} onPress={onBack}>
            <Text style={styles.backText}>Back</Text>
          </Pressable>
        </View>

        {/* Stat cards */}
        <View style={styles.statsGrid}>
          {STATS.map((s) => (
            <View key={s.label} style={[styles.statCard, { borderTopColor: s.color }]}>
              <Text style={styles.statLabel}>{s.label}</Text>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={[styles.statChange, s.trend === "up" ? styles.up : styles.down]}>
                {s.trend === "up" ? "▲" : "▼"} {s.change}
              </Text>
            </View>
          ))}
        </View>

        {/* Weekly activity bar chart */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Activity</Text>
          <View style={styles.barChart}>
            {BARS.map((b) => (
              <View key={b.day} style={styles.barGroup}>
                <View style={[styles.bar, { height: `${b.h}%` as any }]} />
                <Text style={styles.barLabel}>{b.day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent workouts */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recent Workouts</Text>
          {RECENT.map((r) => (
            <View key={r.name} style={styles.row}>
              <View style={[styles.dot, { backgroundColor: r.color }]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.rowTitle}>{r.name}</Text>
                <Text style={styles.rowSub}>{r.time}</Text>
              </View>
              <Text style={styles.rowReps}>{r.reps}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0a0e1a" },
  container: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "700", color: "#fff" },
  subtitle: { fontSize: 13, color: "#8892a8", marginTop: 2 },
  backBtn: { backgroundColor: "#1e2740", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },
  backText: { color: "#e8ecf4", fontWeight: "600" },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 20 },
  statCard: { width: "48%", backgroundColor: "#0f1424", borderRadius: 12, borderWidth: 1, borderColor: "#1e2740", borderTopWidth: 3, padding: 16 },
  statLabel: { color: "#8892a8", fontSize: 11, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 },
  statValue: { color: "#fff", fontSize: 24, fontWeight: "700", marginBottom: 4 },
  statChange: { fontSize: 11 },
  up: { color: "#34d399" },
  down: { color: "#f87171" },
  card: { backgroundColor: "#0f1424", borderRadius: 16, borderWidth: 1, borderColor: "#1e2740", padding: 16, marginBottom: 16 },
  cardTitle: { color: "#fff", fontSize: 15, fontWeight: "600", marginBottom: 16 },
  barChart: { flexDirection: "row", alignItems: "flex-end", height: 180, gap: 6 },
  barGroup: { flex: 1, alignItems: "center", height: "100%", justifyContent: "flex-end" },
  bar: { width: "80%", backgroundColor: "#a6ffff", borderRadius: 4, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  barLabel: { color: "#4a5470", fontSize: 10, marginTop: 6 },
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#151c30" },
  dot: { width: 10, height: 10, borderRadius: 5, marginRight: 12 },
  rowTitle: { color: "#e8ecf4", fontSize: 14, fontWeight: "500" },
  rowSub: { color: "#4a5470", fontSize: 11, marginTop: 2 },
  rowReps: { color: "#8892a8", fontSize: 13, fontWeight: "600" },
});
