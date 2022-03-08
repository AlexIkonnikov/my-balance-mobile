import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import Routes from '../routes';
import DashboardTabStack from './DashboardTabStack';
import WelcomeScreen from './WelcomeScreen';

type UserStackNavigator = {
  [Routes.WelcomeScreen]: undefined;
  [Routes.DashboardTabStack]: undefined;
};

const UserStack = createStackNavigator<UserStackNavigator>();

const UserNavigator: FC = () => {
  return (
    <UserStack.Navigator
      initialRouteName={Routes.WelcomeScreen}
      screenOptions={{headerShown: false}}>
      <UserStack.Screen name={Routes.WelcomeScreen} component={WelcomeScreen} />
      <UserStack.Screen
        name={Routes.DashboardTabStack}
        component={DashboardTabStack}
      />
    </UserStack.Navigator>
  );
};

export type WelcomeScreenProps = StackScreenProps<
  UserStackNavigator,
  Routes.WelcomeScreen
>;

export type DashboardScreenProps = StackScreenProps<
  UserStackNavigator,
  Routes.DashboardTabStack
>;

export default UserNavigator;
