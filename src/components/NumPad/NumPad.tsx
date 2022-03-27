import React, { FC } from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Backspace from '../icon/Backspace';

const { width } = Dimensions.get('window');

const btnWidth = width / 3;

const pads = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '0', '+', '.', '<'];

const GAP = 40;

interface NumPadProps {
  onTap: (simbol: string) => void;
}

const NumPad: FC<NumPadProps> = ({ onTap, children }) => {
  const extraButtons = React.Children.toArray(children);
  const handleTap = (simbol: string) => () => {
    onTap(simbol);
  };

  return (
    <>
      <View style={styles.wrapper}>
        {pads.map((text) => {
          return (
            <BorderlessButton key={text} style={styles.btn} onPress={handleTap(text)}>
              {text === '<' ? <Backspace /> : <Text style={styles.text}>{text}</Text>}
            </BorderlessButton>
          );
        })}
        {extraButtons.map((item) => (
          <View key={item.toLocaleString()} style={styles.btn}>
            {item}
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    margin: 5,
    width: btnWidth - GAP,
    height: btnWidth - GAP,
    borderRadius: btnWidth - GAP / 2,
  },
  text: {
    color: 'black',
    fontSize: 25,
  },
});

export default NumPad;
