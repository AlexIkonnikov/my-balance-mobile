import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Animated, StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMutation, useQueryClient } from 'react-query';
import { onChangeMiddleware } from 'components/NumPad';
import { createTransaction } from 'api';
import { BaseButton, CategoryPicker, DateInput, NumPad } from 'components';
import { Category } from 'interfaces/transaction';
import { TransactionFormProps } from '../UserNavigator';
import { getDateByFormat } from 'utils/date';
import { ToastService } from 'services';
import { queryKeys } from 'constants/queryKeys';

type TransactionFormField = {
  total?: string;
  category: Category;
  date: Date;
  comment?: string;
};

const WIDTH = Dimensions.get('window').width;

const TransactionForm: FC<TransactionFormProps> = () => {
  const client = useQueryClient();
  const right = useRef(new Animated.Value(-WIDTH)).current;
  const left = useRef(new Animated.Value(-WIDTH)).current;
  const bottomCoord = useRef(new Animated.Value(0)).current;
  const { control, getValues, setValue, formState, handleSubmit, trigger, resetField } = useForm<TransactionFormField>({
    mode: 'onChange',
  });

  const { mutate, isLoading } = useMutation(createTransaction);
  const { bottom } = useSafeAreaInsets();
  const setTotal = (volume: string): void => {
    setValue('total', volume);
    trigger('category');
    trigger('date');
  };

  const handleTap = (text: string) => {
    const { total } = getValues();
    const value = total ? total.toString() : '';
    onChangeMiddleware({
      existValue: value,
      symbol: text,
      callback: setTotal,
    });
  };

  const runAnimation = useCallback(
    (value: number | Animated.Value) => {
      Animated.timing(right, {
        toValue: value,
        duration: 400,
        useNativeDriver: false,
      }).start();
      Animated.timing(left, {
        toValue: value,
        duration: 400,
        useNativeDriver: false,
      }).start();
    },
    [left, right],
  );

  useEffect(() => {
    runAnimation(0);
    return () => {
      runAnimation(-WIDTH);
    };
  }, [runAnimation]);

  const onSuccess = (message: string) => () => {
    ToastService.show({
      title: '??????????',
      message,
    });
    resetField('total');
    client.invalidateQueries(queryKeys.TRANSACTIONS);
  };

  const onError = () => {
    ToastService.show({
      title: '????????????!',
      message: '??????-???? ?????????? ???? ??????',
      type: 'error',
    });
  };

  const onSubmit = ({ total, category, date }: TransactionFormField) => {
    const validTotal = Math.round(Number(total));
    const isIncome = validTotal > 0;
    const message = `???????????????????????? ${isIncome ? '??????????' : '????????????'}: ${validTotal} ??????.`;
    mutate(
      {
        total: validTotal,
        comment: '',
        category,
        date: getDateByFormat(date, 'YYYY-MM-DD'),
      },
      {
        onSuccess: onSuccess(message),
        onError: onError,
      },
    );
  };

  return (
    <View style={styles.flex}>
      <SafeAreaView />
      <View style={styles.container}>
        <Animated.View style={[styles.pickerWrapper, { right }]}>
          <Controller
            control={control}
            name="date"
            render={({ field: { value, onChange } }) => (
              <DateInput date={value} onChange={onChange} style={styles.pr5} />
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="category"
            render={({ field: { value, onChange } }) => (
              <CategoryPicker value={value} onChange={onChange} style={styles.pl5} />
            )}
            rules={{ required: true }}
          />
        </Animated.View>

        <Animated.View style={{ left }}>
          <Controller
            control={control}
            name="total"
            render={({ field: { value } }) => (
              <TextInput
                style={styles.input}
                value={value ? value.toString() : undefined}
                placeholder="?????????????? ??????????"
                editable={false}
              />
            )}
            rules={{ required: true }}
          />
        </Animated.View>
        <NumPad onTap={handleTap} />
        <BaseButton
          title="??????????????????"
          disabled={!formState.isValid || isLoading}
          style={[{ paddingBottom: bottom + 30 }, styles.btn]}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  pickerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  input: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  pr5: {
    paddingRight: 5,
  },
  pl5: {
    paddingLeft: 5,
  },
  btn: {
    borderRadius: 0,
    marginTop: 10,
    borderWidth: 0,
    marginHorizontal: -20,
  },
});

export default TransactionForm;
