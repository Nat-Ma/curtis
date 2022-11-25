import React from 'react'
import { createRoot } from "react-dom/client"
import App from './components/App'
// import 'mapbox-gl/dist/mapbox-gl.css';


const root = createRoot(document.getElementById("app"));
root.render(<App />);
