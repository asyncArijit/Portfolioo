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
  root.style.setProperty("--gray-color", COLORS.GRAY);
  root.style.setProperty("--green-color", COLORS.GREEN);
  root.style.setProperty("--light_gray-color", COLORS.LIGHT_GRAY);
  root.style.setProperty("--gradient_border-color", COLORS.GRADIENT_BORDER);
  root.style.setProperty("--text_white-color", COLORS.TEXT_WHITE);
  root.style.setProperty("--orange_yellow_crayola-color", COLORS.GOLD);
  root.style.setProperty("--background2-color", COLORS.BACKGROUND2);
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


 