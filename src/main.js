import './style.css'
import { renderNav, renderFooter } from './components.js'
import './gallery.js' // Side effects or init inside? It has auto-init check.

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
