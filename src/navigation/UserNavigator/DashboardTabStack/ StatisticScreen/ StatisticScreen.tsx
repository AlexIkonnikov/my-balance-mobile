import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {StatisticScreenProps} from './../DashboardTabStack';
import Routes from './../../../routes';

const StatisticScreen: FC<StatisticScreenProps> = ({navigation}) => {
  const showPerMonthStatistic = () => {
    navigation.navigate(Routes.TransactionScreen);
  };

  const showTransactionForm = () => {
    navigation.navigate(Routes.TransactionForm);
  };

  return (
    <ScrollView style={styles.flex} contentContainerStyle={styles.p20}>
      <Text style={styles.label}>Статистика:</Text>
      <TouchableOpacity style={styles.btn} onPress={showPerMonthStatistic}>
        <StyledText>За текущий месяц</StyledText>
      </TouchableOpacity>

      <Text style={styles.label}>Действия:</Text>
      <TouchableOpacity style={styles.btn} onPress={showTransactionForm}>
        <StyledText>Создать</StyledText>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btn} disabled>
        <StyledText>Сканер QR (в разработке)</StyledText>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const StyledText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.black};
`;

const styles = StyleSheet.create({
  p20: {padding: 20},
  btn: {
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  flex: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    color: 'black',
    marginBottom: 10,
  },
});

export default StatisticScreen;
