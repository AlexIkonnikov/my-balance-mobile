import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import Routes from '../routes';
import {DashboardTabStack} from './DashboardTabStack';
import {TransactionForm} from './TransactionForm';
import {TransactionScreen} from './TransactionScreen';
import {WelcomeScreen} from './WelcomeScreen';

export type UserStackNavigator = {
  [Routes.WelcomeScreen]: undefined;
  [Routes.DashboardTabStack]: undefined;
  [Routes.TransactionScreen]: undefined;
  [Routes.TransactionForm]: undefined;
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
      <UserStack.Screen
        name={Routes.TransactionScreen}
        component={TransactionScreen}
      />
      <UserStack.Screen
        name={Routes.TransactionForm}
        component={TransactionForm}
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

export type TransactionScreenProps = StackScreenProps<
  UserStackNavigator,
  Routes.TransactionScreen
>;

export type TransactionFormProps = StackScreenProps<
  UserStackNavigator,
  Routes.TransactionForm
>;

export default UserNavigator;
