import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { StepsProvider } from './context/StepsProvider.tsx';
import Stepper from './Stepper/Stepper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StepsProvider>
      <Stepper />
    </StepsProvider>
  </StrictMode>
);
