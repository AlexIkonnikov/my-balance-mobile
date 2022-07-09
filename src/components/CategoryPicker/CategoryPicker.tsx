import React, { FC } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const items = [
  { label: 'Прочее', value: 'Прочее' },
  { label: 'Продукты питания', value: 'Продукты питания' },
  { label: 'Проезд', value: 'Проезд' },
  { label: 'Мобильная связь', value: 'Мобильная связь' },
  { label: 'Развлечения', value: 'Развлечения' },
  { label: 'Аптека/Мед. услуги', value: 'Аптека/Мед. услуги' },
  { label: 'Быстрое питание', value: 'Быстрое питание' },
  { label: 'Развитие', value: 'Развитие' },
  { label: 'Одежда', value: 'Одежда' },
  { label: 'Аренда', value: 'Аренда' },
  { label: 'Подарки', value: 'Подарки' },
  { label: 'Зарплата', value: 'Зарплата' },
  { label: 'Подработка', value: 'Подработка' },
];

interface CategoryPickerProps {
  onChange: (value: string) => void;
  value?: string;
  style?: StyleProp<ViewStyle>;
}

const CategoryPicker: FC<CategoryPickerProps> = ({ value, onChange, style }) => {
  return (
    <View style={[styles.flex, style]}>
      <RNPickerSelect
        onValueChange={onChange}
        placeholder={{ label: 'Выбрать категорию' }}
        items={items}
        value={value}
        useNativeAndroidPickerStyle={false}
        fixAndroidTouchableBug={true}
        textInputProps={{ numberOfLines: 1 }}
        style={{
          inputAndroid: styles.input,
          inputIOS: styles.input,
          chevronUp: styles.chevron,
          chevronDown: styles.chevron,
          placeholder: {
            color: 'black',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  input: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
    textAlign: 'center',
  },
  chevron: {
    display: 'none',
  },
});

export default CategoryPicker;
