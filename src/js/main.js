import '../css/styles.css';

// Imports all images inside 'img' directory dinamically.
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../img/', true, /\.png$/));

if (module.hot) {
  module.hot.accept();
}
