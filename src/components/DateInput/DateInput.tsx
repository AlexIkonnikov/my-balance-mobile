import dayjs from 'dayjs';
import React, { FC, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DateInputProps {
  date?: Date;
  onChange: (date: Date) => void;
  style?: StyleProp<ViewStyle>;
}

const DateInput: FC<DateInputProps> = ({ date, onChange, style }) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const onConfirm = (value: Date) => {
    onChange(value);
    setShow(false);
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.btn} onPress={openModal}>
        <Text style={styles.text}>{date ? dayjs(date).format('DD.MM.YYYY') : 'Выберите дату'}</Text>
      </TouchableOpacity>
      <DatePicker
        date={date ?? new Date()}
        modal
        mode="date"
        cancelText="Отмена"
        confirmText="Выбрать"
        title="Выберите дату"
        open={show}
        onConfirm={onConfirm}
        onCancel={() => setShow(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});

export default DateInput;
