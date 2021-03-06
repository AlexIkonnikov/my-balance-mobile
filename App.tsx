import React, { useEffect } from 'react';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './src/theme/theme';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store/store';
import { injectStore } from './src/services/HttpService';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-lottie-splash-screen';

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
            <Toast position="top" visibilityTime={3000} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
