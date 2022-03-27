import React, { FC, useCallback, useEffect, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useAppSelector } from 'hooks';
import { userSelectors } from 'store/user';
import Routes from 'navigation/routes';
import { WelcomeScreenProps } from '../UserNavigator';

const HEIGHT = Dimensions.get('screen').height;

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  const { name, patronymic } = useAppSelector(userSelectors.selectName);

  const top = useRef(new Animated.Value(-HEIGHT)).current;
  const bottom = useRef(new Animated.Value(-HEIGHT)).current;

  const runAnimation = useCallback(() => {
    Animated.timing(top, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(bottom, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [top, bottom]);

  useEffect(() => {
    runAnimation();
    const timer = setTimeout(() => {
      navigation.navigate(Routes.DashboardTabStack);
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation, runAnimation]);

  return (
    <Container>
      <Animated.View style={{ top }}>
        <Greetings>Здравствуйте, </Greetings>
      </Animated.View>
      <Animated.View style={{ bottom }}>
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

export default WelcomeScreen;
