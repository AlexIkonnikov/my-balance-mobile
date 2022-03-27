import dayjs from 'dayjs';
import React, { FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { getTransactionPerMounth } from 'api';
import { BaseButton } from 'components';
import { queryKeys } from 'constants/queryKeys';
import { Transaction } from 'interfaces/transaction';
import { TransactionCard } from './components/TransactionCard';

import { TransactionScreenProps } from './../UserNavigator';
import Routes from 'navigation/routes';

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

  const color = () => {
    if ((data?.income ?? 0) + (data?.expenses ?? 0) === 0) {
      return undefined;
    }
    return (data?.income ?? 0) + (data?.expenses ?? 0) > 0 ? green : red;
  };

  return (
    <Contaner>
      <Title>За текущий месяц:</Title>
      <Wrapper>
        <View style={row}>
          <Text style={[text, green]}>Доход: </Text>
          <Text style={[text, green]}>{data?.income}</Text>
        </View>
        <View style={row}>
          <Text style={[text, red]}>Расход: </Text>
          <Text style={[text, red]}>{data?.expenses}</Text>
        </View>
        <View style={row}>
          <Text style={[text, color()]}>Итого: </Text>
          <Text style={[text, color()]}>{(data?.income ?? 0) + (data?.expenses ?? 0)}</Text>
        </View>
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

const { list, listWrapper, row, text, green, red } = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listWrapper: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
  },
  green: {
    color: '#37d179',
  },
  red: {
    color: '#E8502F',
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
