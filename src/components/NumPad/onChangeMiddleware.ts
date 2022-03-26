const CHECK_NUMBER_REGEXP = /^[-]?[0-9]*[.,]?[0-9]+$/;

interface IOnChangeMiddleware {
  existValue: string | number | null;
  symbol: string;
  callback: (result: string) => void;
}

const onChangeMiddleware = ({
  existValue,
  symbol,
  callback,
}: IOnChangeMiddleware): void => {
  const chars = existValue ? existValue.toString().split('') : [];

  if (chars.length > 6 && symbol !== '<') {
    return;
  }

  if (symbol === '0' && chars.length === 0) {
    return;
  }

  if (symbol === '<') {
    chars.pop();
    callback(chars.join(''));
    return;
  }

  if (symbol === '.' && chars.length === 0) {
    chars.push('0.');
    callback(chars.join(''));
    return;
  }

  if (symbol === '-' && chars[0] !== '-') {
    chars.unshift(symbol);
    callback(chars.join(''));
    return;
  }

  if (symbol === '+' && chars[0] === '-') {
    chars.shift();
  }

  if (symbol !== '+' && symbol !== '-') {
    chars.push(symbol);
  }

  const result = chars.join('');

  const matches = RegExp(CHECK_NUMBER_REGEXP).exec(result);
  const isValidNumber = Number.isNaN(Number(result)) === false;

  if (isValidNumber || matches !== null) {
    callback(result);
  }
};

export default onChangeMiddleware;
