import Toast from 'react-native-toast-message';

interface IShow {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
}

class ToastService {
  show({ title, message, type = 'success' }: IShow) {
    Toast.show({
      type,
      text1: title,
      text2: message,
    });
  }
}

export default new ToastService();
