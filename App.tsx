import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './src/theme/theme';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {injectStore} from './src/services/HttpService';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';

injectStore(store);
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          <Navigator />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
