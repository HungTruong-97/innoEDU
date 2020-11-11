import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/router/Router';
import {Provider} from 'react-redux';
import {store} from './src/redux/index';


const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Router/>
      </Provider>
    </>
  );
};
export default App;
