import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../hooks';
import {userSelectors} from '../store/user';
import GuestNavigator from './GuestNavigator';
import UserNavigator from './UserNavigator';

function Navigator() {
  const isAuth = useAppSelector(userSelectors.selectToken);
  const navigator = isAuth ? <UserNavigator /> : <GuestNavigator />;
  return <NavigationContainer>{navigator}</NavigationContainer>;
}

export default Navigator;
