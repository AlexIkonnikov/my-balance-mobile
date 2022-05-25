import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';

const AnimationScreen = () => {
  const x = useRef(new Animated.Value(0)).current;
  const deg = useRef(new Animated.Value(0)).current;

  const spin = deg.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(x, {
        toValue: 150,
        useNativeDriver: true,
        duration: 3000,
        easing: Easing.linear,
      }),
      Animated.timing(deg, {
        toValue: 360,
        useNativeDriver: true,
        duration: 3000,
        easing: Easing.linear,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.square, { transform: [{ rotate: spin }, { translateX: x }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default AnimationScreen;
