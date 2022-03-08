import dayjs from 'dayjs';
import React, {FC, useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';
import {getTransactionPerMounth} from '../../../api';

const TransactionsScreen: FC = () => {
  const [transaction, setData] = useState<{total: number; date: string}[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = () => {
    const currentDate = dayjs();
    const startDate = `01.${currentDate.month() + 1}.${currentDate.year()}`;
    setRefreshing(true);
    getTransactionPerMounth(startDate, currentDate.toString())
      .then(({data}) => {
        setData(data);
      })
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listEmptyComponent = () => (
    <Center>
      <EmptyText>Пока нечего нет...</EmptyText>
    </Center>
  );

  const renderItem: ListRenderItem<{total: number; date: string}> = ({
    item,
  }) => {
    return (
      <TransactionContainer $isIncome={item.total > 0}>
        <StyledText>{item.date}</StyledText>
        <StyledText>{item.total} руб.</StyledText>
      </TransactionContainer>
    );
  };

  return (
    <Contaner>
      <FlatList
        data={transaction}
        contentContainerStyle={{flex: 1}}
        renderItem={renderItem}
        onRefresh={fetchData}
        refreshing={refreshing}
        ListEmptyComponent={listEmptyComponent}
      />
    </Contaner>
  );
};

const Contaner = styled.View`
  flex-grow: 1;
  padding: 20px;
`;

const Center = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  color: ${({theme: {colors}}) => colors.black};
  font-weight: 700;
`;

const TransactionContainer = styled.View<{$isIncome: boolean}>`
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({theme: {colors}, $isIncome}) =>
    $isIncome ? colors.green : colors.red};
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${({theme: {colors}}) => colors.black};
  font-weight: 600;
`;

export default TransactionsScreen;
