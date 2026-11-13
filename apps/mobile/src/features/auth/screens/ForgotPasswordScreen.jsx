import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native"
import ForgotPasswordForm from "../components/ForgotPasswordForm"

const ForgotPasswordScreen = () => {
    return <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Text style={styles.forgotPasswordText}>Password Recovery</Text>
        <Text style={styles.forgotPasswordPara}>Enter your email to receive a password reset link.</Text>
        <ForgotPasswordForm />
    </KeyboardAvoidingView >
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#0F172A",
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: "center"

    },
    forgotPasswordText: {
        color: "#F8FAFC",
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 5,
    },
    forgotPasswordPara: {
        color: "#64748B",
        fontWeight: "400",
        fontSize: 14,
        marginBottom: 5,
    }
})