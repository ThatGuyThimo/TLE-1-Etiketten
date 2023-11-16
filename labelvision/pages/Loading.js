import React, { useEffect, useRef } from "react";
import { Text, View, Animated, StyleSheet, Image, Easing  } from 'react-native';
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function Loading() {
    const animationProgress = useRef(new Animated.Value(0));
  
    useEffect(() => {
        Animated.loop(
            Animated.timing(animationProgress.current, {
              toValue: 1,
              duration: 10000,
              easing: Easing.linear,
              useNativeDriver: false,
            })
        ).start();
      }, []);


    return (
        <View style={styles.LoadingContainer}>
            <Image style={styles.ImageStyle} source={require('../assets/Mee_rotterdam_rijnmond.png')} />
            <AnimatedLottieView
            style={{width: "200%", height: "200%", position: "absolute", top: "-50%", left: "-50%"}}
            source={require("../assets/ripple.json")}
            progress={animationProgress.current}
        />
        </View>
      );
    }

  const styles = StyleSheet.create({
    lottieContainer: {
        backgroundColor: "#ff9a4d",
        position: "absolute",
        justifyContent: "center",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 0
    },
    LoadingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#ff9a4d",
    },
    ImageStyle: {
        position: "absolute",
        height: "10%",
        width: "100%",
        top: "auto",
        left: "20px",
        right: "20px",
        zIndex: 2
    }
  });

  export {Loading}