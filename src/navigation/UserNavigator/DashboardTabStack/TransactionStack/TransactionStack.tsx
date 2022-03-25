import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TransactionScreen from './TransactionScreen';

const TransactionNavigator = createStackNavigator();

const TransactionStack = () => {
  return (
    <TransactionNavigator.Navigator initialRouteName="TransactionScreen">
      <TransactionNavigator.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{headerShown: false}}
      />
    </TransactionNavigator.Navigator>
  );
};

export default TransactionStack;
