import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';

const appDiv = document.getElementById('app')!;
const root = createRoot(appDiv);

root.render(<App />);