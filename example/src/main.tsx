// ANCHOR Solid
import { render } from 'solid-js/web';

// ANCHOR Solid App Router
import { Router } from 'solid-app-router';

// ANCHOR Twind
import { setup } from 'twind';
import { aspectRatio } from '@twind/aspect-ratio';
import 'twind/shim';

// ANCHOR Components
import App from './App';

// ANCHOR Styles
import './main.css';
import './lion-skin.css'

setup({
  darkMode: 'class',
  plugins: {
    aspect: aspectRatio,
  },
});

const root = document.getElementById('app');

if (root) {
  render(
    () => (
      <Router>
        <App />
      </Router>
    ),
    root,
  );
}
