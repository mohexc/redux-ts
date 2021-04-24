import './App.css';
import { store } from './state';
import { Provider } from 'react-redux';
import RepositoriesList from './components/RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
