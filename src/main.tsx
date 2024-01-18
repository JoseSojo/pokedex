import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DexterProvider } from './services/DexterContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DexterProvider>
    <App />
  </DexterProvider>
)
