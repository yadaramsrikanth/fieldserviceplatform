
import { View, Text, StyleSheet, Animated, Pressable } from "react-native"
import { Shield } from "lucide-react-native"
import { useEffect, useRef } from "react"
import { useRouter } from "expo-router"

//application landing page


export default function LandingScreen() {
  const router = useRouter()
  const shieldY = useRef(new Animated.Value(0)).current
  const shine = useRef(new Animated.Value(0)).current
  const textColor = shine.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#94A3B8", "#FFFFFF", "#94A3B8"],

  })

  useEffect(() => {
    //text animation
    const shineAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shine, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: false,
        }),
        Animated.delay(400),
        Animated.timing(shine, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ])
    )

    //shield animation
    const shieldAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(shieldY, {
          toValue: -12,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(shieldY, {
          toValue: 0,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    );


    shineAnimation.start();
    shieldAnimation.start();

    return () => {
      shineAnimation.stop();
      shieldAnimation.stop();
    }

  }, [])


  const handleContinue = () => {
    router.push("/welcome")
  }

  return <Pressable style={styles.container} onPress={handleContinue}>
    <Animated.View style={{
      transform: [{ translateY: shieldY }],
    }}>
      <View style={styles.iconContainer}>
        <Shield size={45} color="#F8FAFC" />
      </View>
    </Animated.View>
    <Text style={styles.title}>FieldForce</Text>
    <Text style={styles.subtitle}>FIELD SERVICE MANAGEMENT</Text>
    <View>
      <Animated.Text
        style={[styles.touchText, { color: textColor }]}>
        Tap anywhere to enter...
      </Animated.Text>
    </View>
  </Pressable >
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#F8FAFC",
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "sans-serif"

  },
  subtitle: {
    color: "#1D4ED8",
    fontSize: 16,
    fontWeight: "500"
  },
  touchText: {
    color: "#94A3B8",
    fontSize: 16,
    fontWeight: "200",
    marginTop: 50
  },
  iconContainer: {
    height: 90,
    width: 90,
    backgroundColor: "#3B82F6",
    marginBottom: 24,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "#334155"

  }
})
