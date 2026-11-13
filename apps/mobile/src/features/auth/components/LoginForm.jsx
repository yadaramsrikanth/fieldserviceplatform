import { StyleSheet, Text, View, TextInput, Pressable } from "react-native"
import { Mail, Lock } from "lucide-react-native"
import { useRouter } from "expo-router"


const LoginForm = () => {
    const router = useRouter()
    return <View style={styles.loginFormContainer}>

        <Text style={styles.labelElement}>Email Address</Text>
        <View style={styles.inputContainer}>
            <Mail size={22} style={styles.mailIcon} />
            <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="Enter your email.." />
        </View>

        <View style={styles.passwordForgotPasswordContainer}>
            <Text style={styles.labelElement}>Password</Text>
            <Pressable onPress={() => router.push("/forgot-password")}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
        </View>

        <View style={styles.inputContainer}>
            <Lock size={22} style={styles.mailIcon} />
            <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="Enter your password.." secureTextEntry />
        </View>
        <Pressable style={styles.loginButton} >
            <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
    </View>
}

export default LoginForm

const styles = StyleSheet.create({
    loginFormContainer: {

    },
    labelElement: {
        color: "#94A3B8",
        fontSize: 18,
        fontWeight: 600
    },
    inputElement: {
        height: 40,

        borderWidth: 2,
        marginTop: 5,
        borderColor: '#334155',
        borderRadius: 5,
        backgroundColor: "#1E293B",
        color: "#F8FAFC",
        paddingLeft: 40,
        paddingTop: 10,

    },

    inputContainer: {
        position: "relative"
    },
    mailIcon: {
        position: "absolute",
        color: "#94A3B8",
        left: 12,
        top: 14,
        zIndex: 1,

    },
    passwordForgotPasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    forgotText: {
        color: '#2563EB',
        fontSize: 15,
        fontWeight: "600"
    },
    loginButton: {
        height: 40,
        backgroundColor: "#1D4ED8",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    loginButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "700"
    }
})