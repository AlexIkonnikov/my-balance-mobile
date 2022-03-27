import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

export const bottomTabOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const bottomOption = (text: string, Icon?: FC<SvgProps>): BottomTabNavigationOptions => {
  return {
    tabBarLabel: ({ focused }) => (
      <View style={styles.mb5}>
        <Label $focused={focused}>{text}</Label>
      </View>
    ),
    tabBarIcon: ({ focused }) => {
      return Icon ? <Icon fill={focused ? '#37d179' : 'gray'} /> : null;
    },
    title: text,
  };
};

const styles = StyleSheet.create({
  mb5: { marginBottom: 5 },
});

const Label = styled.Text<{ $focused: boolean }>`
  font-size: 11px;
  color: ${({ $focused, theme: { colors } }) => ($focused ? colors.green : colors.gray)};
  font-weight: ${({ $focused }) => ($focused ? 'bold' : 'normal')};
`;
