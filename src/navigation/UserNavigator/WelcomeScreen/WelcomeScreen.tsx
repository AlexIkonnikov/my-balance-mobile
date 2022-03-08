import React, {FC, useEffect} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {useAppSelector} from '../../../hooks';
import {userSelectors} from '../../../store/user';
import Routes from '../../routes';
import {WelcomeScreenProps} from '../UserNavigator';

const WelcomeScreen: FC<WelcomeScreenProps> = ({navigation}) => {
  const {name, patronymic} = useAppSelector(userSelectors.selectName);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(Routes.DashboardTabStack);
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <Animated.View>
        <Greetings>
          Здравствуйте, {name} {patronymic}
        </Greetings>
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({theme: {colors}}) => colors.white};
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Greetings = styled.Text`
  font-size: 30px;
  color: ${({theme: {colors}}) => colors.black};
  font-weight: bold;
  text-align: center;
`;

export default WelcomeScreen;
