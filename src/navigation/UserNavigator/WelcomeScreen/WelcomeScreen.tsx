import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useAppSelector } from 'hooks';
import { userSelectors } from 'store/user';
import Routes from 'navigation/routes';
import { WelcomeScreenProps } from '../UserNavigator';
import LottieView from 'lottie-react-native';

const money = require('./../../../components/Lottie/money.json');

const HEIGHT = Dimensions.get('screen').height;

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  const { name, patronymic } = useAppSelector(userSelectors.selectName);

  const left = useRef(new Animated.Value(-HEIGHT)).current;
  const right = useRef(new Animated.Value(HEIGHT)).current;

  const runAnimation = useCallback(() => {
    Animated.timing(left, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(right, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [left, right]);

  useEffect(() => {
    runAnimation();
    const timer = setTimeout(() => {
      navigation.navigate(Routes.DashboardTabStack);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation, runAnimation]);

  return (
    <Container>
      <LottieView source={money} autoPlay={true} loop={false} style={styles.lottie} />
      <Animated.View style={{ transform: [{ translateX: left }] }}>
        <Greetings>Здравствуйте, </Greetings>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateX: right }] }}>
        <Greetings>
          {name} {patronymic}
        </Greetings>
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({ theme: { colors } }) => colors.white};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Greetings = styled.Text`
  font-size: 30px;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: bold;
  text-align: center;
`;

const styles = StyleSheet.create({
  lottie: {
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});

export default WelcomeScreen;
