import { Provider } from 'react-redux';
import './App.css';
import Main from './components/Main';
import myStore from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Error404 from './components/errorBoundary/error404/ErrorPage';

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
          <BrowserRouter>
              <ErrorBoundary fallback={<Error404/>}>
                  <Main/>
              </ErrorBoundary>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
