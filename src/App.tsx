import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';

const App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
);

export default App;
