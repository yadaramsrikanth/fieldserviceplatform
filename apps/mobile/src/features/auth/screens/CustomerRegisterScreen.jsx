import { KeyboardAvoidingView, StyleSheet, Text } from "react-native"

import CustomerRegisterForm from "../components/CustomerRegisterForm"


const CustomerRegisterScreen = () => {
    return <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Text style={styles.customerRegisterText}>Create Customer Account</Text>
        <Text style={styles.customerRegisterPara}>Book trusted field services in minutes.</Text>
        <CustomerRegisterForm />
    </KeyboardAvoidingView>
}

export default CustomerRegisterScreen

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#0F172A",
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: "center"

    },
    customerRegisterText: {
        color: "#F8FAFC",
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 5,
    },
    customerRegisterPara: {
        color: "#64748B",
        fontWeight: "400",
        fontSize: 14,
        marginBottom: 5,
    }
})