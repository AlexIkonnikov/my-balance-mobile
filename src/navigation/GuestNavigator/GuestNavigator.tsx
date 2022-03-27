import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '../routes';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import { StackScreenProps } from '@react-navigation/stack';

type GuestStackNavigator = {
  [Routes.SignInScreen]: undefined;
  [Routes.SignUpScreen]: undefined;
};

const GuestStack = createStackNavigator<GuestStackNavigator>();

const GuestNavigator: FC = () => {
  return (
    <GuestStack.Navigator screenOptions={{ headerShown: false }}>
      <GuestStack.Screen name={Routes.SignInScreen} component={SignInScreen} />
      <GuestStack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
    </GuestStack.Navigator>
  );
};

export type SignInScreenProps = StackScreenProps<GuestStackNavigator, Routes.SignInScreen>;
export type SignUpScreenProps = StackScreenProps<GuestStackNavigator, Routes.SignUpScreen>;
export default GuestNavigator;
