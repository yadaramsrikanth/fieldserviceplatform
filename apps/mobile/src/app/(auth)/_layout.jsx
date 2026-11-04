import { Stack } from "expo-router";
import { View, Text, StyleSheet, } from "react-native";
import { ShieldIcon } from "lucide-react-native";

function CustomHeader() {
    return (
        <View style={styles.header}>
            <ShieldIcon size={24} color="#FFFFFF" />

            <Text style={styles.headerTitle}>FieldForce</Text>
        </View>
    );
}

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                header: () => <CustomHeader />,
            }}
        />
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#0F172A",
        gap: 12,
    },
    headerTitle: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});