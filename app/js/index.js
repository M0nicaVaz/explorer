import home from './home.js';
import project from './project.js';

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);

const validateHash = (hash) => (hash === '' ? home() : project(hash));

const renderPage = () => {
  const { hash } = window.location;

  container.innerHTML = '';

  const page = validateHash(hash);

  container.appendChild(page);
};

window.addEventListener('load', () => {
  renderPage();
  init();
});
