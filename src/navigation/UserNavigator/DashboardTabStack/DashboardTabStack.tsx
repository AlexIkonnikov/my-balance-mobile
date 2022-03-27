import React, { FC } from 'react';
import { DashboardScreenProps, UserStackNavigator } from '../UserNavigator';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Routes from 'navigation/routes';
import { ProfileScreen } from './ProfileScreen';
import { bottomOption } from './options';
import { Money, Profile } from 'components/icon';
import { StatisticScreen } from './ StatisticScreen';

type DashboardTabStackProps = UserStackNavigator & {
  [Routes.StatisticScreen]: undefined;
  [Routes.ProfileScreen]: undefined;
};

const Dashboard = createBottomTabNavigator<DashboardTabStackProps>();

const DashboardTabStack: FC<DashboardScreenProps> = () => {
  return (
    <Dashboard.Navigator initialRouteName={Routes.ProfileScreen}>
      <Dashboard.Screen
        name={Routes.StatisticScreen}
        component={StatisticScreen}
        options={bottomOption('Деньги', Money)}
      />
      <Dashboard.Screen
        name={Routes.ProfileScreen}
        component={ProfileScreen}
        options={bottomOption('Профиль', Profile)}
      />
    </Dashboard.Navigator>
  );
};

export type StatisticScreenProps = BottomTabScreenProps<DashboardTabStackProps, Routes.StatisticScreen>;

export type ProfileScreenProps = BottomTabScreenProps<DashboardTabStackProps, Routes.ProfileScreen>;

export default DashboardTabStack;
