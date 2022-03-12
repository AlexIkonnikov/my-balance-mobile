import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './src/theme/theme';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {injectStore} from './src/services/HttpService';
import SplashScreen from 'react-native-splash-screen';

injectStore(store);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <Navigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
