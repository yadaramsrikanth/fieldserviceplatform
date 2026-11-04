import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Settings } from "lucide-react-native";
export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <View style={styles.settingsIconContainer}>
                    <Settings size={32} color="#ffffff" />
                </View>

                <Text style={styles.title}>Book Services.</Text>
                <Text style={styles.title}>Manage Jobs.</Text>
                <Text style={styles.title}>Get Work Done.</Text>
                <Text style={styles.welcomePara}>
                    The trusted on-demand platform connecting homeowners with certified HVAC, Plumbing & Electrical professionals.
                </Text>
            </View>
            {/* bottom buttons */}
            <View style={styles.bottomButtonsContainer}>
                <Pressable style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Get Started (Create Account)</Text>
                </Pressable>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Already Have an Account? Log In</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        paddingBottom: 30,
        paddingHorizontal: 24
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F8FAFC",
    },
    welcomePara: {
        fontSize: 14,
        padding: 10,
        textAlign: "center",
        color: "#94A3B8"
    },
    settingsIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#2563EB",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    bottomButtonsContainer: {
        gap: 14
    },
    registerButton: {
        padding: 12,
        backgroundColor: "#2563EB",
        alignItems:"center",
        borderRadius:15
    },
    registerButtonText: {
        color: "#ffffff",
        fontWeight:"700",
        fontSize:18
    },
    loginButton:{
         padding: 12,
        backgroundColor: "#1E293B",
        alignItems:"center",
        borderRadius:15,
        borderWidth:1,
        borderColor:"#334155"
    },
    loginButtonText: {
        color: "#ffffff",
        fontWeight:"500",
        fontSize:14
    }


})