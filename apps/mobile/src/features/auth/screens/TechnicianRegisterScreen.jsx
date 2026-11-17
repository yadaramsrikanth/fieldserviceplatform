import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native"

import ProgressBar from "../components/ProgressBar"

const TechnicianRegisterScreen = () => {
    return <KeyboardAvoidingView style={styles.container}>
        <ProgressBar />
    </KeyboardAvoidingView>
}

export default TechnicianRegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        paddingHorizontal: 20,
        paddingVertical: 40,

    },
})