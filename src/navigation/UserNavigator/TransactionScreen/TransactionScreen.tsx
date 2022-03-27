import dayjs from 'dayjs';
import React, { FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { getTransactionPerMounth } from '../../../api';
import { BaseButton } from '../../../components';
import { queryKeys } from '../../../constants/queryKeys';
import { Transaction } from '../../../interfaces/transaction';
import { TransactionCard } from './components/TransactionCard';

import { TransactionScreenProps } from './../UserNavigator';
import Routes from '../../routes';

const TransactionScreen: FC<TransactionScreenProps> = ({ navigation }) => {
  const currentDate = dayjs();
  const start = currentDate.startOf('month').format('YYYY-MM-DD');
  const end = currentDate.endOf('month').format('YYYY-MM-DD');
  const { data, refetch, isLoading } = useQuery(queryKeys.TRANSACTIONS, () => getTransactionPerMounth(start, end));

  const showTransactionForm = () => {
    navigation.navigate(Routes.TransactionForm);
  };

  const listEmptyComponent = () => (
    <Center>
      <EmptyText>Пока нечего нет...</EmptyText>
    </Center>
  );

  const renderItem: ListRenderItem<Transaction> = ({ item }) => {
    return <TransactionCard {...item} />;
  };

  return (
    <Contaner>
      <Title>За текущий месяц:</Title>
      <Wrapper>
        <Text>Доход: {data?.income}</Text>
        <Text>Расход: {data?.expenses}</Text>
        <Text>Итого: {data?.income && data?.expenses ? data?.income + data?.expenses : 0}</Text>
      </Wrapper>
      <View style={listWrapper}>
        <FlatList
          data={data?.transactions}
          style={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id + ' '}
          onRefresh={refetch}
          refreshing={isLoading}
          ItemSeparatorComponent={() => <Separator />}
          ListEmptyComponent={listEmptyComponent}
          showsVerticalScrollIndicator={false}
          onResponderEnd={() => refetch()}
        />
        <AddButton title="+" onPress={showTransactionForm} />
      </View>
    </Contaner>
  );
};

const { list, listWrapper } = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  listWrapper: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

const Contaner = styled.View`
  flex-grow: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
`;

const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.black};
  padding: 20px;
  padding-bottom: 0;
`;

const Center = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 700;
`;

const AddButton = styled(BaseButton)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TransactionScreen;
