import { StyleSheet, Text, View } from "react-native"



const ProgressBar = ({ currentStep, totalStep }) => {
    // calculating progress bar
    const progress = (currentStep / totalStep) * 100
    return <View style={styles.container}>
        {/* background bar */}
        <View style={styles.progressTrack}>
            {/* filled bar */}
            <View style={[styles.progressFill, { width: `${progress}` }]}>

            </View>
        </View>
    </View>
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        width: "100%",

    },
    progressTrack: {
        height: 10,
        backgroundColor: "#334155",
        borderRadius: 10,
        // overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#3B82F6",
        borderRadius: 10,
    }
})