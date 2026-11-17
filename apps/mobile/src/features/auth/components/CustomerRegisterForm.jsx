import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"


const CustomerRegisterForm = () => {
    return <View>
        <Text style={styles.labelElement}>Full Name</Text>
        <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="Sarah Jenkis" />
        <Text style={styles.labelElement}>Email Address</Text>
        <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="sarah@gmail.com" />
        <Text style={styles.labelElement}>Phone Number</Text>
        <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="9876543210" />
        <Text style={styles.labelElement}>Password</Text>
        <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="....." secureTextEntry />
        <Text style={styles.labelElement}>Confirm Password</Text>
        <TextInput placeholderTextColor="#94A3B8" style={styles.inputElement} placeholder="....." secureTextEntry />
        <Pressable style={styles.createAccountButton} >
            <Text style={styles.createAccountButtonText}>Create Account</Text>
        </Pressable>
    </View >
}


export default CustomerRegisterForm

const styles = StyleSheet.create({
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
        borderRadius: 10,
        backgroundColor: "#1E293B",
        color: "#F8FAFC",
        paddingLeft: 10,
        paddingTop: 10,
        marginBottom: 5
    },

    createAccountButton: {
        height: 40,
        backgroundColor: "#1D4ED8",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    createAccountButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "700"
    }
})