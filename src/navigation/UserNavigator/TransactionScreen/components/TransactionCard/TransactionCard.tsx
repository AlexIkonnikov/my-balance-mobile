import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { FastFood, Food, Travel, Mobile, Medicine, Cloth, Rent, Presents } from 'components/categoryIcon';
import { Money } from 'components/icon';
import { TransactionResponse, Transaction, Category } from 'interfaces/transaction';
import { getDateByFormat } from 'utils/date';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { BaseButton } from 'react-native-gesture-handler';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTransaction } from 'api';
import { queryKeys } from 'constants/queryKeys';

const icons = {
  [Category.OTHER]: <Money />,
  [Category.FOOD]: <Food />,
  [Category.FAST_FOOD]: <FastFood />,
  [Category.TRAVEL]: <Travel />,
  [Category.MOBILE]: <Mobile />,
  [Category.ENTERTAINMENT]: <Money />,
  [Category.MEDICINE]: <Medicine />,
  [Category.DEVELOPMENT]: <Money />,
  [Category.CLOTH]: <Cloth />,
  [Category.RENT]: <Rent />,
  [Category.SALARY]: <Money />,
  [Category.PRESENTS]: <Presents />,
  [Category.PART_TIME_JOB]: <Money />,
};

const TransactionCard: FC<Transaction> = ({ category, date, total, id }) => {
  const client = useQueryClient();
  const { colors } = useTheme();
  const { mutate, isLoading } = useMutation(deleteTransaction);
  const renderRightActions = () => {
    return (
      <BaseButton style={styles.btn}>
        {isLoading ? <ActivityIndicator color={colors.white} /> : <DeleteText>Удалить</DeleteText>}
      </BaseButton>
    );
  };

  const onDelete = () => {
    const oldData = client.getQueriesData<TransactionResponse>(queryKeys.TRANSACTIONS)[0][1].transactions;
    const newData = oldData.filter((item) => item.id !== id);

    mutate(id, {
      onSuccess: () => {
        client.setQueriesData(queryKeys.TRANSACTIONS, (old) => {
          return { ...(old as Object), transactions: newData };
        });
      },
    });
  };

  return (
    <Swipeable renderRightActions={renderRightActions} onSwipeableOpen={onDelete}>
      <TransactionContainer>
        <IconWrapper>{icons[category]}</IconWrapper>
        <Wrapper>
          <StyledText>{getDateByFormat(date)}</StyledText>
          <StyledText>{category}</StyledText>
        </Wrapper>
        <SumText $isDanger={total < 0}>{total} руб.</SumText>
      </TransactionContainer>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8502F',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
});

const TransactionContainer = styled.View`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100%;
`;

const Wrapper = styled.View`
  flex-grow: 1;
`;

const IconWrapper = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.white};
  margin-right: 20px;
`;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 600;
`;

const DeleteText = styled(StyledText)`
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: bold;
`;

const SumText = styled(StyledText)<{ $isDanger?: boolean }>`
  color: ${({ theme: { colors }, $isDanger }) => ($isDanger ? colors.red : colors.green)};
`;

export default TransactionCard;
