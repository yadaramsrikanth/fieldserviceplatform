import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native"
import LoginForm from "../components/LoginForm"



const LoginScreen = () => {
    return <KeyboardAvoidingView style={styles.container} behavior="height">
        <Text style={styles.signInText}>
            Sign In to Field Force
        </Text>
        <Text style={styles.signInPara}>Access your account or Jobs dashboard</Text>
        <LoginForm />
    </KeyboardAvoidingView>
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        paddingHorizontal: 30,
        paddingVertical: 40,
        justifyContent: "center"
    },
    signInText: {
        color: "#F8FAFC",
        fontWeight: "800",
        fontSize: 20,
        marginBottom: 5,
    },
    signInPara: {
        color: "#64748B",
        fontWeight: "400",
        fontSize: 16,
        marginBottom: 5,
    }

})