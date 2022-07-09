import React, { FC, useCallback, useState } from 'react';
import { Text, StyleSheet, FlatList, ListRenderItem, LayoutChangeEvent } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Backspace from '../icon/Backspace';

const pads = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '+', '.', '<'];

interface NumPadProps {
  onTap: (simbol: string) => void;
}

interface IButtonProps {
  key: string;
  text: string;
  height: number;
  width: number;
}

const keyExtractor = (item: IButtonProps) => item.key;

const NumPad: FC<NumPadProps> = ({ onTap }) => {
  const [buttons, setButtons] = useState<IButtonProps[]>([]);
  console.log(buttons);
  const renderItem: ListRenderItem<typeof buttons[0]> = ({ item: { width, height, text } }) => {
    return (
      <BorderlessButton
        style={[
          styles.btn,
          {
            width,
            height,
          },
        ]}
        onPress={handleTap(text)}>
        {text === '<' ? <Backspace /> : <Text style={styles.text}>{text}</Text>}
      </BorderlessButton>
    );
  };

  const onListLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height, width },
      },
    }: LayoutChangeEvent) => {
      setButtons(
        pads.map((item, index) => ({
          key: `${item}${index}`,
          text: item,
          height: height / 5,
          width: width / 3,
        })) as never,
      );
    },
    [],
  );

  const handleTap = (simbol: string) => () => {
    onTap(simbol);
  };

  return (
    <FlatList
      data={buttons}
      style={styles.pad}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      scrollEnabled={false}
      numColumns={3}
      onLayout={onListLayout}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  pad: {
    flex: 1,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
});

export default NumPad;
