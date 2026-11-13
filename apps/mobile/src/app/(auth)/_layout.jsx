import { Stack, useRouter } from "expo-router";
import { Text, StyleSheet, Pressable, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ShieldCheck, ChevronLeft, ArrowLeft } from "lucide-react-native";

function CustomHeader() {
    return (
        <SafeAreaView style={styles.header}>
            <ShieldCheck size={24} color="#FFFFFF" />
            <Text style={styles.headerTitle}>FieldForce</Text>
        </SafeAreaView>
    );
}

function AuthHeader() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.header}>
            <Pressable style={styles.authHeaderContainer} onPress={() => router.back()}>
                <ArrowLeft size={18} color="#ffffff" />
                <Text style={[styles.backButton, { color: "#ffffff", marginLeft: "8" }]}>Back</Text>
            </Pressable>
        </SafeAreaView>
    )
}


export default function AuthLayout() {
    return (


        <Stack>

            <Stack.Screen name="welcome" options={{
                header: () => <CustomHeader />
            }} />
            <Stack.Screen name="customer-technician" options={{
                header: () => <AuthHeader />,

            }} />
            <Stack.Screen name="login" options={{ header: () => <AuthHeader /> }} />
            <Stack.Screen name="forgot-password" options={{ header: () => <AuthHeader /> }} />
        </Stack>


    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#1E293B",
        gap: 10,
        paddingVertical: 10,

    },
    headerTitle: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
    authHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",

    }
});