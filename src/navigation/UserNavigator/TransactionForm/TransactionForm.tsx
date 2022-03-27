import React, { FC, useCallback, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Animated, StyleSheet, TextInput, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMutation } from 'react-query';
import { onChangeMiddleware } from 'components/NumPad';
import { createTransaction } from 'api';
import { BaseButton, CategoryPicker, DateInput, NumPad } from 'components';
import { Category } from 'interfaces/transaction';
import { TransactionFormProps } from '../UserNavigator';
import { getDateByFormat } from 'utils/date';
import { ToastService } from 'services';

type TransactionFormField = {
  total?: string;
  category: Category;
  date: Date;
  comment?: string;
};

const WIDTH = Dimensions.get('window').width;

const TransactionForm: FC<TransactionFormProps> = () => {
  const right = useRef(new Animated.Value(-WIDTH)).current;
  const left = useRef(new Animated.Value(-WIDTH)).current;
  const bottomCoord = useRef(new Animated.Value(0)).current;
  const { control, getValues, setValue, formState, handleSubmit, trigger, reset } = useForm<TransactionFormField>({
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
      title: 'Успех',
      message,
    });
    reset();
  };

  const onError = () => {
    ToastService.show({
      title: 'Ошибка!',
      message: 'Что-то пошло не так',
      type: 'error',
    });
  };

  const onSubmit = ({ total, category, date }: TransactionFormField) => {
    const validTotal = Math.round(Number(total));
    const isIncome = validTotal > 0;
    const message = `Зафиксирован ${isIncome ? 'доход' : 'расход'}: ${validTotal} руб.`;
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
                placeholder="Введите сумму"
                editable={false}
              />
            )}
            rules={{ required: true }}
          />
        </Animated.View>
        <Animated.View style={{ bottom: bottomCoord }}>
          <NumPad onTap={handleTap} />
          <BaseButton
            title="Отправить"
            disabled={!formState.isValid || isLoading}
            style={[{ paddingBottom: bottom + 30 }, styles.btn]}
            onPress={handleSubmit(onSubmit)}
          />
        </Animated.View>
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
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 0,
  },
  input: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
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
