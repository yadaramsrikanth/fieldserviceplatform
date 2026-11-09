import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { UserRound, ChevronRight, Wrench } from "lucide-react-native"
import { useRouter } from "expo-router";

export default function CustomerTechnician() {
    const router = useRouter()
    return <View style={styles.container}>
        {/* <ScrollView style={{flex:1}} contentContainerStyle={{
            flexGrow: 1,
            
        }}> */}
            <Text style={styles.textHeading}> How will you use FieldForce?</Text>
            <Text style={styles.textPara}>Select your account type to proceed.</Text>
            <Pressable style={({ pressed }) => [
                styles.customerContainer,
                pressed & styles.cardPressed
            ]} onPress={() => router.push("/")}>
                <View>
                    <View style={styles.customerInnerContainer}>
                        <UserRound size={30} style={styles.iconStyles} />
                        <Text style={styles.customerText}>CUSTOMER</Text>
                    </View>
                    <Text style={styles.customerPara}>Book and manage home & field service requests</Text>
                </View>
                <ChevronRight size={30} style={styles.iconStyles} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.customerContainer,
                pressed & styles.cardPressed
            ]} onPress={() => router.push("/")}>
                <View>
                    <View style={styles.customerInnerContainer}>
                        <Wrench size={30} style={styles.iconStyles} />
                        <Text style={styles.customerText}>TECHNICIAN</Text>
                    </View>
                    <Text style={styles.customerPara}>Manage jobs, receive dispatches, and grow earnings.</Text>
                </View>
                <ChevronRight size={30} style={styles.iconStyles} />
            </Pressable>


        {/* </ScrollView>   */}
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        alignItems: "center",
        paddingVertical: 40
    },
    textHeading: {
        fontSize: 22,
        fontWeight: 800,
        color: "#ffffff"
    },
    textPara: {
        fontSize: 15,
        fontWeight: 400,
        color: "#94A3B8",
        paddingTop: 8
    },
    customerContainer: {
        height: 120,
        width: "80%",
        backgroundColor: "#1E293B",
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#334155",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingRight: 40,
        paddingLeft: 20

    },
    cardPressed: {
        borderColor: "#2563EB"
    },
    customerInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    iconStyles: {
        color: "#ffffff"
    },
    customerText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: 800
    },
    customerPara: {
        marginTop: 10,
        color: "#94A3B8"
    }
})