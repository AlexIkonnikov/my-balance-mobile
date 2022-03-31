import React, { FC, useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { getDateByFormat } from 'utils/date';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface DateInputProps {
  date?: Date;
  onChange: (date: Date) => void;
  style?: StyleProp<ViewStyle>;
}

const DateInput: FC<DateInputProps> = ({ date, onChange, style }) => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const onConfirm = (_event: DateTimePickerEvent, value?: Date) => {
    setShow(false);
    if (value) {
      onChange(value);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.btn} onPress={openModal}>
        <Text style={styles.text}>{date ? getDateByFormat(date) : 'Выберите дату'}</Text>
      </TouchableOpacity>
      {show && <DateTimePicker value={date ?? new Date()} onChange={onConfirm} mode="date" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});

export default DateInput;
