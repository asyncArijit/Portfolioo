import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {FONTS,COLORS} from './utils/contants.js'

// Ensure document is available
 
  const root = document.documentElement;

  // Setting font families
  root.style.setProperty("--primary-font", FONTS.PRIMARY);
  root.style.setProperty("--secondary-font", FONTS.SECONDARY);
  root.style.setProperty("--monospace-font", FONTS.MONOSPACE);
 

  // Setting colors
  root.style.setProperty("--primary-color", COLORS.PRIMARY);
  root.style.setProperty("--secondary-color", COLORS.SECONDARY);
  root.style.setProperty("--background-color", COLORS.BACKGROUND);
  root.style.setProperty("--text-color", COLORS.TEXT);
  root.style.setProperty("--border-color", COLORS.BORDER);
  root.style.setProperty("--shadow-color", COLORS.SHADOW);
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);