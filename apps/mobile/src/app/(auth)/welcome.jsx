import { StyleSheet, Text, View } from 'react-native'
import { Settings } from "lucide-react-native";
export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.settingsIconContainer}>
                <Settings size={32} color="#3B82F6" />
            </View>

            <Text style={styles.title}>Book Services.</Text>
            <Text style={styles.title}>Manage Jobs.</Text>
            <Text style={styles.title}>Get Work Done.</Text>
            <Text style={styles.welcomePara}>
                The trusted on-demand platform connecting homeowners with certified HVAC, Plumbing & Electrical professionals.
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0F172A"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#F8FAFC",
    },
    welcomePara: {
        fontSize: 16,
        padding: 10,
        textAlign: "center",
        color: "#94A3B8"
    },
    settingsIconContainer:{
        width:80,
        height:80,
        borderRadius:25,
        backgroundColor:"#3B82F6"
    }
})