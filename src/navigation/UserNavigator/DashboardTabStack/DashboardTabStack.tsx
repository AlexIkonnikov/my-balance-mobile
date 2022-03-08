import React, {FC} from 'react';
import {DashboardScreenProps} from '../UserNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../../routes';
import ProfileScreen from '../ProfileScreen';
import TransactionsScreen from '../TransactionsScreen';
import ReportScreen from '../ReportScreen';
import {bottomOption} from './options';
import {Graph, Money, Profile} from '../../../components/icon';

const Dashboard = createBottomTabNavigator();

const DashboardTabStack: FC<DashboardScreenProps> = () => {
  return (
    <Dashboard.Navigator initialRouteName={Routes.ProfileScreen}>
      <Dashboard.Screen
        name={Routes.TransactionsScreen}
        component={TransactionsScreen}
        options={bottomOption('Транзакции', Money)}
      />
      <Dashboard.Screen
        name={Routes.ReportScreen}
        component={ReportScreen}
        options={bottomOption('Отчеты', Graph)}
      />
      <Dashboard.Screen
        name={Routes.ProfileScreen}
        component={ProfileScreen}
        options={bottomOption('Профиль', Profile)}
      />
    </Dashboard.Navigator>
  );
};

export default DashboardTabStack;
