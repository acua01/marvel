import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/styles.scss';
import 'animate.css';
import { AppProvider } from './components/AppProvider/AppProviderTest.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
