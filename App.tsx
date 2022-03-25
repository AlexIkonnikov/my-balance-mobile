import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './src/theme/theme';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/store';
import {injectStore} from './src/services/HttpService';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';

injectStore(store);
const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={myTheme}>
            <Navigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
